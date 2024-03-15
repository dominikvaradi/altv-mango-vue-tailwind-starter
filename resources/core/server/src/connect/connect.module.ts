import { Module } from "@altv-mango/server";
import { ConnectController } from "./controllers/connect.controller";

@Module({
    controllers: [ConnectController],
})
export class ConnectModule {}
