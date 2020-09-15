import { Module } from '@nestjs/common';
import { PingPongService } from './pingpong.service';
import { PingPongResolver } from './pingpong.resolver';

@Module({
  providers: [PingPongService, PingPongResolver]
})
export class PingPongModule {}
