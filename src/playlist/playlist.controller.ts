import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlayList } from './Schema/playlist.schema';

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  // create a playlist
  @Post()
  async create(@Body() playlist: PlayList): Promise<PlayList> {
    return await this.playlistService.create(playlist);
  }

  // find and update a playlist
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() playlist: PlayList,
  ): Promise<PlayList> {
    return await this.playlistService.update(id, playlist);
  }

  // add a track to playlist
  @Put(':id/tracks')
  async addTrack(
    @Param('id') id: string,
    @Body() list: PlayList,
  ): Promise<PlayList> {
    console.log(list);
    return await this.playlistService.addTrack(id, list);
  }

  //Get playlist
  @Get(':id')
  async getPlaylist(@Param('id') id: string): Promise<PlayList> {
    const playlist = await this.playlistService.getPlaylist(id);
    return playlist;
  }

  // get all playlist and tracks
  @Get()
  async getAllPlaylist(): Promise<PlayList[]> {
    const playlist = await this.playlistService.getAllPlaylist();
    return playlist;
  }

  // delete track from playlist
  @Put(':id/tracks/:trackId')
  async deleteTrack(
    @Param('id') id: string,
    @Param('trackId') trackId: string,
  ): Promise<PlayList> {
    return await this.playlistService.deleteTrack(id, trackId);
  }
}
