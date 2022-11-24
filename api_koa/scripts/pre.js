module.exports = async (runner, args) => {
  try {
    console.log("> PRE: Installing prerequisites (API):");

    const rc = args.rc;
    await runner.execute(
      [
        `nx g @nrwl/node:application ${rc.path}`,
        "npm i koa koa-bodyparser koa-router",
        "npm i -D @types/koa @types/koa-bodyparser @types/koa-router",
      ],
      {
        cwd: rc.workspace_path,
      }
    );

    console.log("> PRE: requisites ✅ DONE");
  } catch {
    console.error(ex);
    throw new Error("failed to install api pre-requisites");
  }
};
