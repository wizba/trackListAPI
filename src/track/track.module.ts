import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackSchema } from './Schema/track.schema';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/sercurity/jwt-auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Track', schema: TrackSchema }]),
  ],
  providers: [
    TrackService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [TrackController],
})
export class TrackModule {}
