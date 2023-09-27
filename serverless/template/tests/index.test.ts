import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { handler } from '../src/index';
import { mockEvent } from './__mocks__/events';

describe('Unit test for app handler', function () {
  it('verifies successful response', async () => {
    const event: APIGatewayProxyEvent = mockEvent;
    const result: APIGatewayProxyResult = await handler(event);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(
      JSON.stringify({
        message: 'hello world',
      }),
    );
  });
});
