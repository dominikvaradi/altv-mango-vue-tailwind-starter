import { Module } from "@altv-mango/server";
import { ConnectModule } from "./connect/connect.module";

@Module({
    imports: [ConnectModule],
})
export class RootModule {}
