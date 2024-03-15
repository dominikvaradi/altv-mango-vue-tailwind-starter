import { Module } from "@altv-mango/client";
import { ConnectModule } from "./connect/connect.module";

@Module({
    imports: [ConnectModule],
})
export class RootModule {}
