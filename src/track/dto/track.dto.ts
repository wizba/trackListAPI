/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class TrackDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  album: string;

  @IsNotEmpty()
  @IsString()
  artist: string;

  @IsNotEmpty()
  @IsPositive()
  duration: number;

  @IsNotEmpty()
  @IsString()
  genre: string;

  @IsNotEmpty()
  @IsPositive()
  year: number;

  @IsString()
  lyrics?: string;

  @IsNotEmpty()
  @IsString()
  audio: string;

  @IsNotEmpty()
  @IsString()
  artwork: string;
}
