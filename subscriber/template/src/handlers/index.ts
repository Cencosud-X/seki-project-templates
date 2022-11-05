{{#each data.settings.configuration.topics}}
import {{onReceiveMessagesHandler}} from './{{onReceiveMessagesHandler}}'
{{/each}}

export {
{{#each data.settings.configuration.topics}}
  {{onReceiveMessagesHandler}},
{{/each}}
}