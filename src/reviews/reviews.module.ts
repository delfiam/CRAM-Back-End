import { Module } from '@nestjs/common';
import {ReviewsService} from './reviews.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsController } from './reviews.controller';
import { Review } from './reviews.entity';
import { SeguidoModule } from 'src/seguido/seguido.module';


@Module({
  imports: [SeguidoModule, TypeOrmModule.forFeature([Review])],
  providers: [ReviewsService],
  controllers: [ReviewsController],
})

export class ReviewModule {}
