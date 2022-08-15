/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class TrackDtoSwagger {
  @ApiProperty()
  name: string;

  @ApiProperty()
  album: string;

  @ApiProperty()
  artist: string;

  @ApiProperty()
  duration: number;

  @ApiProperty()
  genre: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  lyrics?: string;

  @ApiProperty()
  audio: string;

  @ApiProperty()
  artwork: string;
}

export class loginInfoSwagger {
  @ApiProperty({default: 'admin'})
  username: string;

  @ApiProperty({default: 'changeme'})
  password: string;
}

export class PlayListDtoSwagger {
  @ApiProperty()
  name: string;

  @ApiProperty({default: [{
    _id: '5e9f8f8f8f8f8f8f8f8f8f8f'
  }]})
  tracks: any[];
}

