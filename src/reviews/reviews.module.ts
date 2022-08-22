import { Module } from '@nestjs/common';
import {ReviewsService} from './Reviews.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsController } from './Reviews.controller';
import { Review } from './Reviews.entity';
import { SeguidoModule } from 'src/seguido/seguido.module';


@Module({
  imports: [SeguidoModule, TypeOrmModule.forFeature([Review])],
  providers: [ReviewsService],
  controllers: [ReviewsController],
})

export class ReviewModule {}
