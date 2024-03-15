import * as altServer from "@altv/server";
import * as http from "http";
import debounce from "debounce";

const ALTV_CLIENT_DEBUG_PORT = 9223;

const WATCH_SERVER_PORT = 7789;
const WATCH_SERVER_LOGGER_PREFIX = "~w~[~m~👁️WatchServer~w~]";

const log = (message: string, prefix: "Log" | "Error" = "Log") => {
    altServer.log(`${WATCH_SERVER_LOGGER_PREFIX}~w~[~lb~${prefix}~w~]`, message);
};

const restartResourceAsync = (resourceName: string): Promise<boolean> => {
    log(`Restarting ~lc~${resourceName}~lw~ resource...`);

    return new Promise((resolve) => {
        if (altServer.Resource.exists(resourceName)) {
            const handler = altServer.Events.onAnyResourceStart((context) => {
                if (context.resource.name === resourceName) {
                    log(`Resource ~lc~${resourceName}~lw~ restarted`);

                    resolve(true);

                    handler.destroy();
                }
            });

            altServer.Resource.restart(resourceName);
        } else {
            log(`Failed to restart ~lc~${resourceName}~lw~ resource: Resource not found`, "Error");

            resolve(false);
        }
    });
};

const debouncedRestartCoreResource = debounce(async () => {
    debouncedRestartCoreResource.clear();

    const success = await restartResourceAsync("core");
    if (!success) return;

    const reconnectPlayersOnCoreModuleRestart = process.env["RECONNECT_PLAYERS_ON_CORE_MODULE_RESTART"]?.toLowerCase() === "true";

    if (!reconnectPlayersOnCoreModuleRestart) return;

    altServer.Player.all.forEach((player) => {
        log(`Reconnecting Player (id: ${player.id})...`);
        fetch(`http://127.0.0.1:${ALTV_CLIENT_DEBUG_PORT}/reconnect`, {
            method: "POST",
        })
            .then((response) => {
                if (!response.ok) throw new Error(`Failed to reconnect player ${player.id}.`);

                log(`Player (id: ${player.id}) reconnected`);
            })
            .catch((error) => {
                log(error?.message ?? error, "Error");
            });
    });
}, 250);

const watchServerEnabled = process.env["WATCH_SERVER"]?.toLowerCase() === "true";
if (watchServerEnabled) {
    const httpServer = http.createServer(async (req, res) => {
        if (req.method !== "POST" || req.url !== "/restart-core-resource") {
            res.writeHead(404);
            res.end();
            return;
        }

        await debouncedRestartCoreResource();

        res.writeHead(200);
        res.end();
    });
    httpServer.listen(WATCH_SERVER_PORT, () => {
        log(`~lw~Started Watch Server on port ${WATCH_SERVER_PORT}`);
    });
} else {
    log("~lw~Watch Server disabled");
}
