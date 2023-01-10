const path = require('path');

module.exports = async (runner, args) => {
  try {
    const rc = args.rc;
    const content = args.content;
    const file = args.file;

    //************************************************
    //** REPLACEMENT FOR HANDLERS INTERPOLATIONS */
    // Check if the file is a Topic Handler (via path)
    if (file.includes("/src/handlers/")) {

      // the name of the dynamic file is the name of the 
      // handler prop in the "topic" configuration
      const handlerToFind = path.basename(file, ".ts");
      if (!handlerToFind.startsWith("index")) {
        const topics = rc.settings.topics
        const topic = topics.find((topic) => topic.onReceiveMessagesHandler === handlerToFind);
        if (topic) {
          // console.log(`  > FOR_EACH: Match file (${path.basename(file)}):`);
          return content
            .replace(/\%FOR_EACH_UPPERCASE_HANDLER_NAME_REPLACEMENT\%/ig, topic.onReceiveMessagesHandler.toUpperCase())
            .replace(/\%FOR_EACH_HANDLER_NAME_REPLACEMENT\%/ig, topic.onReceiveMessagesHandler)
            .replace(/\%PROVIDER_TYPE\%/ig, topic.provider.toLowerCase())
            .replace(/\%FOR_EACH_HANDLER_ARTIFACT_NAME_REPLACEMENT\%/ig,
              topic.provider.toUpperCase() !== 'KAFKA' ? 'constants.ARTIFACT_NAME': '`${constants.ARTIFACT_NAME}-${constants.TOPIC_' + topic.onReceiveMessagesHandler.toUpperCase() + '}`')
        }
      }
    }
    //************************************************

  } catch (ex) {
    console.error(ex);
  }
}
