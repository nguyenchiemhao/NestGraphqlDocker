import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

const PONG_EVENT_NAME = 'pong';

@Resolver()
export class PingPongResolver {
  private pubSub: PubSub
  constructor() {
    this.pubSub = new PubSub()
  }

  @Mutation('ping')
  async ping(@Args('id') id: string) {
    const pingId = Date.now() + "_" + id;
    this.pubSub.publish(PONG_EVENT_NAME, { [PONG_EVENT_NAME]: { pingId } });
    return { id: pingId };
  }

  @Subscription(PONG_EVENT_NAME)
  pong() {
    return this.pubSub.asyncIterator(PONG_EVENT_NAME);
  }
}
