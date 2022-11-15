import Subscriber from '@team_seki/subscriber-plugin';
import * as handlers from './handlers'

type handlerKey = keyof typeof handlers;
const port = 8080;

Subscriber.boot({
  port,
  handlers: (Object
    .keys(handlers) as Array<handlerKey>)
    .map((key: handlerKey) => handlers[key])
}, () => {
  console.log('All handlers are ready');
  console.log(`🚀 Health is running on: http://localhost:${port}/health \n`);
})