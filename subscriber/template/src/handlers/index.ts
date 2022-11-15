{{#each data.settings.topics}}
import {{onReceiveMessagesHandler}} from './{{onReceiveMessagesHandler}}'
{{/each}}

export {
{{#each data.settings.topics}}
  {{onReceiveMessagesHandler}},
{{/each}}
}