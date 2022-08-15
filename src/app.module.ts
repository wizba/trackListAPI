import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackModule } from './track/track.module';
import { PlaylistModule } from './playlist/playlist.module';
import { LocalStrategy } from './sercurity/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './sercurity/jwtConstants';
import { JwtStrategy } from './sercurity/jwt.strategy';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI_LOCAL),
    TrackModule,
    PlaylistModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '120s' },
    }),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      ttl: 10,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
