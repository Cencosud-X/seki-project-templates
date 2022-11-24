import { Server } from "http";
import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import { createPingRoute } from "./routes/ping";

export class KoaServer {
  private koaServer: Koa;
  private runningServer: Server;

  constructor(private port: number, private productName: string) {
    this.koaServer = new Koa();
    this.koaServer.use(bodyParser());
    this.koaServer.use(async (_, next) => {
      try {
        await next();
      } catch (err) {
        err.status = err.statusCode ?? err.status ?? 500;
        throw err;
      }
    });

    const router = new Router();
    createPingRoute(router);

    this.koaServer.use(router.routes()).use(router.allowedMethods());
  }

  listen(): void {
    this.runningServer = this.koaServer.listen(this.port);
    console.log(
      `${this.productName}: 🚀 Api is running on: http://localhost:${this.port}`
    );
  }

  getHTTPServer(): Koa {
    return this.koaServer;
  }

  async stop(): Promise<void> {
    this.runningServer.close();
    console.log(`closed the web server running on ${this.port}`);
  }
}
