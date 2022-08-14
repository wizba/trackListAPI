/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Track } from '../../track/Schema/track.schema';

@Schema()
export class PlayList  {
  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }] })
  tracks?: Track[];

  @Prop({ default: mongoose.now() })
  createdAt: Date;

  @Prop({ default: mongoose.now() })
  updatedAt: Date;
}

export const PlayListSchema = SchemaFactory.createForClass(PlayList);