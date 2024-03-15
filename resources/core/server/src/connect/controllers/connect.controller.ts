import { Controller, Inject, LOGGER_SERVICE, type LoggerService, OnPlayerConnect, Player } from "@altv-mango/server";
import * as altServer from "@altv/server";

@Controller()
export class ConnectController {
    @Inject(LOGGER_SERVICE) private readonly logger: LoggerService;

    @OnPlayerConnect()
    onPlayerConnect(@Player() player: altServer.Player) {
        player.model = "mp_m_freemode_01";
        player.spawn(new altServer.Vector3(0, 0, 72));
        this.logger.log(`Player ${player.id} connected`);
    }
}
