import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { TrackDto } from './dto/track.dto';
import { Track } from './Schema/track.schema';
import { TrackDtoSwagger } from '../swagger/track.swagger';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  // create a track
  @ApiBody({ type: TrackDtoSwagger })
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
