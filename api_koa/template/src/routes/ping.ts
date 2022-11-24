import * as Router from "koa-router";

export function createPingRoute(router: Router) {
  router.get("/ping", async (ctx) => {
    ctx.body = "pong";
  });

  return router;
}
