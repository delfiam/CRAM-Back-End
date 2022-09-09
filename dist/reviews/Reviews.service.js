"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const Reviews_entity_1 = require("./Reviews.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const seguido_service_1 = require("../seguido/seguido.service");
let ReviewsService = class ReviewsService {
    constructor(Reviews, seguidosService) {
        this.Reviews = Reviews;
        this.seguidosService = seguidosService;
    }
    getReview() {
        return this.Reviews.find();
    }
    getReviewbyID(id) {
        return this.Reviews.findOneBy({ IdReview: id });
    }
    getReviewFromID(id) {
        return this.Reviews.findBy({ IdUsuario: id });
    }
    getReviewFromLugar(id) {
        return this.Reviews.findBy({ IdLugar: id });
    }
    crearReview(Review) {
        return this.Reviews.save(Review);
    }
    editarReview(id, Review) {
        return this.Reviews.update(id, Review);
    }
    async eliminarReview(id) {
        await this.Reviews.delete(id);
    }
};
ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Reviews_entity_1.Review)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        seguido_service_1.SeguidoService])
], ReviewsService);
exports.ReviewsService = ReviewsService;
//# sourceMappingURL=Reviews.service.js.map