/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {now, Document} from "mongoose";
@Schema()
export class Track {
  @Prop()
  name: string;

  @Prop()
  album: string;

  @Prop()
  artist: string;

  @Prop()
  duration: number;

  @Prop()
  genre: string;

  @Prop()
  year: number;

  @Prop()
  lyrics: string;

  @Prop()
  audio: string;

  @Prop()
  artwork: string;

  
  @Prop({default: now()})
  createdAt: Date;

  @Prop({default: now()})
  updatedAt: Date;
}

export const TrackSchema = SchemaFactory.createForClass(Track);