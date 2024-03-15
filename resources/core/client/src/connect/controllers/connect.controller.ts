import { Controller, Inject, LOGGER_SERVICE, type LoggerService, OnConnectionComplete } from "@altv-mango/client";

@Controller()
export class ConnectController {
    @Inject(LOGGER_SERVICE) private readonly logger: LoggerService;

    @OnConnectionComplete()
    onConnectionComplete() {
        this.logger.log("Connected to server!");
    }
}
