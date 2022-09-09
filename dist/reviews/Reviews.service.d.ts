import { Review } from './Reviews.entity';
import { Repository } from 'typeorm';
import { SeguidoService } from 'src/seguido/seguido.service';
export declare class ReviewsService {
    private Reviews;
    private seguidosService;
    constructor(Reviews: Repository<Review>, seguidosService: SeguidoService);
    getReview(): Promise<Review[]>;
    getReviewbyID(id: number): Promise<Review>;
    getReviewFromID(id: number): Promise<Review[]>;
    getReviewFromLugar(id: string): Promise<Review[]>;
    crearReview(Review: Review): Promise<Review>;
    editarReview(id: number, Review: Review): Promise<import("typeorm").UpdateResult>;
    eliminarReview(id: number): Promise<void>;
}
