/* eslint-disable prettier/prettier */
import { getModelToken } from "@nestjs/mongoose";
import { Test, TestingModule } from "@nestjs/testing";
import { Model } from "mongoose";
import { Track } from "./Schema/track.schema";
import { TrackService } from "./track.service";

const mockTrackService = {
    find: jest.fn(),
    create: jest.fn(),
    findById: jest.fn(),
    findByIdAndRemove: jest.fn(),
}

const mockTrackModel = {
    "createdAt": "2022-08-14T21:04:40.223Z",
    "updatedAt": "2022-08-14T21:04:40.223Z",
    "_id": "62f7414253e6226f93a8d9fc",
    "name": "monking bird",
    "album": "rap momish",
    "artist": "eminem",
    "duration": 11,
    "genre": "hip hop",
    "year": 2007,
    "lyrics": "helllo world ..",
    "audio": "https://www.youtube.com/watch?v=KcCG_zdAu6Q",
    "artwork": "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/264x264.jpg",
    "__v": 0,

}

const mockNewTrack = {
    "name": "when i am gone",
    "album": "rap momish",
    "artist": "eminem",
    "duration": 11,
    "genre": "hip hop",
    "year": 2007,
    "lyrics": "helllo world ..",
    "audio": "https://www.youtube.com/watch?v=KcCG_zdAu6Q",
    "artwork": "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/264x264.jpg"
}

describe('TrackService', () => {
    let service: TrackService;
    let model: Model<Track>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TrackService,
                {
                    provide: getModelToken(Track.name),
                    useValue: mockTrackService,
                }
            ]
        }).compile();

        service = module.get<TrackService>(TrackService);
        model = module.get<Model<Track>>(getModelToken(Track.name));

    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('findAll', () => {
        it('get all tracks', async () => {

            jest.spyOn(model, 'find').mockImplementation((): any => {
                return Promise.resolve([mockTrackModel]);
            });
            const result = await service.findAll();
            
            expect(result).toEqual([mockTrackModel]);
        })
    });

    describe('createTrack', () => {
       
            it('should create a new track', async () => {
                jest.spyOn(model, 'create').mockImplementation((): any => {
                    return Promise.resolve(mockTrackModel);
                });
                
                const result = await service.create(mockNewTrack);
           
                expect(result).toEqual(mockTrackModel);
            });
    })

    describe('findById', () => {
        it('should find a track by id', async () => {
            jest.spyOn(model, 'findById').mockImplementation((): any => {
                return Promise.resolve(mockTrackModel);
            });
            
            const result = await service.findById(mockTrackModel._id);
            console.log(result);
            expect(result).toEqual(mockTrackModel);
            });
           
    })

    describe('delete', () => {

        it('should delete a track', async () => {
            jest.spyOn(model, 'findByIdAndRemove').mockImplementation((): any => {
                return Promise.resolve(mockTrackModel);
            });
            const result = await service.delete(mockTrackModel._id);
            expect(result).toEqual(mockTrackModel);
        } )
    } )

});