import Subscriber from '@team_seki/subscriber-plugin';
import * as handlers from './handlers';
import secrets from './config/secrets';

const port = 8080;
Subscriber.boot({
  port,
  handlers: Object.keys(handlers).map((key) => handlers[key])
}, () => {
  console.log(`${secrets.PRODUCT_NAME}: 🚀 health is running on: http://localhost:${port}/health`);
})