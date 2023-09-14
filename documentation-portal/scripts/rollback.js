module.exports = async (runner, args) => {
  try {
    console.log("> Cleaning Monorepo....");

    const rc = args.rc;
    await runner.execute(`npx nx g @nx/workspace:rm ${rc.path}`, {
      cwd: rc.workspace_path,
    });

    console.log("> Rollback ✅ DONE");
  } catch {
    throw new Error("failed to rollback Nx");
  }
};
