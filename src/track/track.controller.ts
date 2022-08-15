import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TrackDto } from './dto/track.dto';
import { Track } from './Schema/track.schema';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  // create a track
  @Post()
  async create(@Body() track: TrackDto): Promise<Track> {
    return await this.trackService.create(track);
  }

  // find all tracks
  @Get()
  async findAll(): Promise<Track[]> {
    return await this.trackService.findAll();
  }

  // delete a track
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.trackService.delete(id);
  }
}
