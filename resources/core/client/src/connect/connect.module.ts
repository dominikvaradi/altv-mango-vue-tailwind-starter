import { Module } from "@altv-mango/client";
import { ConnectController } from "./controllers/connect.controller";

@Module({
    controllers: [ConnectController],
})
export class ConnectModule {}
