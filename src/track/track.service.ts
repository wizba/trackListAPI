import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrackDto } from './dto/track.dto';
import { Track } from './Schema/track.schema';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel('Track') private readonly trackModel: Model<Track>,
  ) { }

  async findAll(): Promise<Track[]> {
    return await this.trackModel.find();
  }

  // create a track
  async create(track: TrackDto): Promise<Track> {

    return await this.trackModel.create(track);
  }

  // find a track by id
  async findById(id: string): Promise<Track> {
    return await this.trackModel.findById(id);
  }

  // update a track
  async update(id: string, track: Track): Promise<Track> {
    return await this.trackModel.findByIdAndUpdate(id, track, { new: true });
  }

  // delete a track
  async delete(id: string): Promise<any> {
    return await this.trackModel.findByIdAndRemove(id);
  }
}
