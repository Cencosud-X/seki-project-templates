export default {
  {{#each data.settings.topics}}
  /**
   * ```js
   * {
   *  topic: "{{name}}",
   *  handler: "{{onReceiveMessagesHandler}}",
   *  provider: "{{provider}}"
   * }
   * ```
   */
  TOPIC_{{#uppercase onReceiveMessagesHandler}}{{/uppercase}}: "{{name}}",
  {{/each}}

  /**
  * Artifact name to use to identify the source in a dead letter queue
  * 
  * (Also use in pubsub plugin to assign the consumer id)
  */
  ARTIFACT_NAME: "{{data.product.name}}.{{data.path}}",

  /**
   * Message version for publishing message
   * 
   * (You can use this variable to filter message version processing)
   * 
   * More info: https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md
   */
  MESSAGE_VERSION: "v1.0.0"
}
