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
    @ApiQuery({name: 'id_usuario', required: false, type: Number})
    @ApiQuery({name: 'id_lugar', required: false, type: String})
    @ApiQuery({name: 'seguidos_from', required: false, type: Number})

    getReviews(
        @Query('id_usuario') IdUsuario: number,  
        @Query('id_lugar') IdLugar: string,  
        @Query('seguidos_from') Seguidos: number,  
        ) {

        const metadata = {IdUsuario, IdLugar, Seguidos}
        const data = []
        switch (null){
            case !IdUsuario:
                
                let reviewUsuario = { reviews_from_user:  this.ReviewsService.getReviewFromID(IdUsuario)};
                data.push(reviewUsuario)
                break;
            case !IdLugar:
                let reviewsLugar = { reviews_de_lugar:  this.ReviewsService.getReviewFromLugar(IdLugar)};
                data.push(reviewsLugar)
                break;
            case !Seguidos:
                let reviewsSeguidos = {reviews_de_seguidos: this.ReviewsService.getReviewSeguidos(Seguidos)}
                data.push(reviewsSeguidos)
            default:
                data.push(this.ReviewsService.getReview()) 
        }
        return{
            message: 'reviews',
            data: data,
            metadata,
        }
    }

    @Get(':id') // localhost:3000/Reviews/1
    getReviewByID(@Param('id') id: number) {
        return this.ReviewsService.getReviewbyID(id);
      
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
