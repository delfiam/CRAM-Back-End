import { Injectable } from '@nestjs/common';
import { Review } from './reviews.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { SeguidoService } from 'src/seguido/seguido.service';
import { Seguido } from 'src/seguido/seguido.entity';

@Injectable()
export class ReviewsService {
    constructor(
        @InjectRepository(Review)
        private Reviews: Repository<Review>,
        private seguidosService: SeguidoService,
    ) { }

    getReview(): Promise<Review[]> {
        return this.Reviews.find();
    }

    getReviewbyID(id: number): Promise<Review> {
        return this.Reviews.findOneBy({ IdReview: id });
    }

    getReviewFromID(id : number) : Promise<Review[]>{
        return this.Reviews.findBy({IdUsuario: id})
    }

    getReviewFromLugar(id: string) : Promise<Review[]>{
        return this.Reviews.findBy({IdLugar : id})
    }
    crearReview(Review: Review) {
        return this.Reviews.save(Review);
    }

    editarReview(id: number, Review: Review) {
        return this.Reviews.update(id, Review);
    }

    async eliminarReview(id: number): Promise<void> {
        await this.Reviews.delete(id);
    }

}
