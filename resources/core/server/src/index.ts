import "@abraham/reflection";
import { createAppBuilder } from "@altv-mango/server";
import { RootModule } from "./root.module";

const appBuilder = await createAppBuilder();
const app = await appBuilder.build();

await app.start(RootModule);
