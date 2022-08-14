import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlayList } from './Schema/playlist.schema';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectModel(PlayList.name) private readonly playlistModel: Model<PlayList>,
  ) {}

  async findAll(): Promise<PlayList[]> {
    return await this.playlistModel.find();
  }
  //create a playlist
  async create(playlist: PlayList): Promise<PlayList> {
    const newPlaylist = new this.playlistModel(playlist);
    return await newPlaylist.save();
  }

  // find and update a playlist
  async update(id: string, playlist: PlayList): Promise<PlayList> {
    return await this.playlistModel.findByIdAndUpdate(id, playlist, {
      new: true,
    });
  }

  // add a track to playlist
  async addTrack(id: string, list: PlayList): Promise<PlayList> {
    return await this.playlistModel.findByIdAndUpdate(
      id,
      { $push: { tracks: list.tracks } },
      { new: true },
    );
  }

  // get playlist and tracks
  async getPlaylist(id: string): Promise<PlayList> {
    return await this.playlistModel.findById(id).populate('tracks');
  }

  // get all playlist and tracks
  async getAllPlaylist(): Promise<PlayList[]> {
    return await this.playlistModel.find().populate('tracks');
  }

  //delete playlist
  async delete(id: string): Promise<PlayList> {
    return await this.playlistModel.findByIdAndDelete(id, {
      new: true,
    });
  }

  //delete track from playlist
  async deleteTrack(id: string, trackId: string): Promise<PlayList> {
    return await this.playlistModel.findByIdAndUpdate(
      id,
      { $pull: { tracks: trackId } },
      { new: true },
    );
  }
}
