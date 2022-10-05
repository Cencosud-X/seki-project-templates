import Constants from '../constants';
import { PubSub } from '@google-cloud/pubsub';
import * as EventsRc from '../config/eventsrc.plugin.json';

process.env['GOOGLE_APPLICATION_CREDENTIALS'] = `${process.cwd()}/config/google_credentials_default.json`;
process.env['PUBSUB_EMULATOR_HOST'] = 'localhost:8085';
const pubSub = new PubSub();

const createTopic = async (topicName: string): Promise<void> => {
  try {
    await pubSub.createTopic(topicName);
  } catch (error) {
    if ((error as { code: number }).code === 6) {
      return;
    }

    console.error(error);
    throw error;
  }
};

const createSubscription = async (topicName: string, subscriptionName: string): Promise<void> => {
  try {
    await pubSub.topic(topicName).createSubscription(subscriptionName);
  } catch (error) {
    if ((error as { code: number }).code === 6) {
      return;
    }

    console.error(error);
    throw error;
  }
};

const boot = async () => {
  if (process.env['NODE_ENV'] !== 'development') {
    return;
  }

  for (let i = 0; i < EventsRc.configuration.topics.length; i++) {
    const topic = EventsRc.configuration.topics[i];
    await createTopic(topic.name);
    await createSubscription(topic.name, `${Constants.CONSUMER_ID}.${topic.name}`);
  }
};

export { boot };
