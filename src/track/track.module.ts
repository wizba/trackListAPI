import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackSchema } from './Schema/track.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Track', schema: TrackSchema }]),
  ],
  providers: [TrackService],
  controllers: [TrackController],
})
export class TrackModule {}
