import { Controller, Body, Get, Post, Patch, Delete, Param, Query } from '@nestjs/common';
import { ReviewsService } from './Reviews.service';
import { Review } from './Reviews.entity';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { filter } from 'rxjs';

@Controller('Reviews')
@ApiTags('Reviews')
export class ReviewsController {
    constructor(private ReviewsService: ReviewsService) { }

    @Get() // localhost:3000/Reviews/
    @ApiQuery({name: 'id_lugar', required: false, type: String})

    getReviews(
        @Query('id_lugar') IdLugar: string,  
        ) {
            if (IdLugar !== null){
                return this.ReviewsService.getReviewFromLugar(IdLugar)
            }
            else{
                return this.ReviewsService.getReview()
            }
        
    }

    @Get(':id') // localhost:3000/Reviews/1
    getReviewByID(@Param('id') id: number) {
        return this.ReviewsService.getReviewbyID(id);
      
    }
    
    @Get('/user/:id') // localhost:3000/Reviews/seguidos/1
    getReviewFromSeguidos(@Param('id') id: number) {
        return this.ReviewsService.getReviewFromID(id);
      
    }

    @Post() // localhost:3000/Reviews
    crearReview(@Body() Reviews: Review) {
        return this.ReviewsService.crearReview(Reviews);
    }

    @Patch(':id') // localhost:3000/Reviews/1
    editarReview(@Param('id') id: number, @Body() Reviews: Review) {
        return this.ReviewsService.editarReview(id, Reviews);
    }

    @Delete(':id') // localhost:3000/Reviews/1
    eliminarReview(@Param('id') id: number) {
        return this.ReviewsService.eliminarReview(id);
    }


}
