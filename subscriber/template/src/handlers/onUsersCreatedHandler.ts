import { IHandler, IMessage } from '@team_seki/event-streamer';

export default class Handler extends IHandler {
    async handleMessage(message: IMessage): Promise<void> {
        console.log('User created received: ', message.getParsedData(), message.id);
    }
}