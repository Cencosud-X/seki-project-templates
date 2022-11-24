import { KoaServer } from "./server";
import secrets from "./config/secrets";

const server = new KoaServer(9800, secrets.PRODUCT_NAME);
server.listen();
