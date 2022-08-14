import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';
import { PlayListSchema } from './Schema/playlist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'PlayList', schema: PlayListSchema }]),
  ],
  controllers: [PlaylistController],
  providers: [PlaylistService],
})
export class PlaylistModule {}
