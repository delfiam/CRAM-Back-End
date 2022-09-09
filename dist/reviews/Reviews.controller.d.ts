import { ReviewsService } from './Reviews.service';
import { Review } from './Reviews.entity';
export declare class ReviewsController {
    private ReviewsService;
    constructor(ReviewsService: ReviewsService);
    getReviews(IdLugar: string): Promise<Review[]>;
    getReviewByID(id: number): Promise<Review>;
    getReviewFromSeguidos(id: number): Promise<Review[]>;
    crearReview(Reviews: Review): Promise<Review>;
    editarReview(id: number, Reviews: Review): Promise<import("typeorm").UpdateResult>;
    eliminarReview(id: number): Promise<void>;
}
