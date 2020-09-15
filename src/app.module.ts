import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path';
import { PingPongModule } from './pingpong/pingpong.module';

@Module({
  imports: [GraphQLModule.forRoot({
    installSubscriptionHandlers: true,
    typePaths: ['./**/*.graphql'],
    definitions: { path: join(process.cwd(), 'src/graphql.ts') },
    // context: ({ req }) => ({ headers: req.headers }),
  }),
    UserModule,
    PingPongModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
