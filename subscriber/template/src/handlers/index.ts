{{#each data.settings.configuration.topics}}
import {{onReceiveMessagesHandler}} from './{{onReceiveMessagesHandler}}'
{{/each}}

export default {
{{#each data.settings.configuration.topics}}
  {{onReceiveMessagesHandler}},
{{/each}}
}