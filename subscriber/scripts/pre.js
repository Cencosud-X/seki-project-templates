module.exports = async (runner, args) => {
  try {
    console.log("> PRE: Installing prerequisites (Subscriber):");

    const rc = args.rc;
    await runner.execute([
      'npm install --save-dev @nrwl/nest@14.4.3',
      'npm install --save @team_seki/subscriber-plugin@1.0.4',
      'npm install --save @team_seki/kafka-streamer-plugin@1.0.2',
      'npm install --save @team_seki/pubsub-streamer-plugin@1.0.8',
      `npx nx g @nrwl/nest:app ${rc.path}`,
    ], {
      cwd: rc.workspace_path
    });

    console.log("> PRE: requisites ✅ DONE");
  } catch {
    console.error(ex);
    throw new Error("Failed to install subscriber pre-requisites");
  }
};
