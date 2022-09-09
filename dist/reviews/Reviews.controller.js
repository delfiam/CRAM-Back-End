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
exports.ReviewsController = void 0;
const common_1 = require("@nestjs/common");
const Reviews_service_1 = require("./Reviews.service");
const Reviews_entity_1 = require("./Reviews.entity");
const swagger_1 = require("@nestjs/swagger");
let ReviewsController = class ReviewsController {
    constructor(ReviewsService) {
        this.ReviewsService = ReviewsService;
    }
    getReviews(IdLugar) {
        if (IdLugar !== null) {
            return this.ReviewsService.getReviewFromLugar(IdLugar);
        }
        else {
            return this.ReviewsService.getReview();
        }
    }
    getReviewByID(id) {
        return this.ReviewsService.getReviewbyID(id);
    }
    getReviewFromSeguidos(id) {
        return this.ReviewsService.getReviewFromID(id);
    }
    crearReview(Reviews) {
        return this.ReviewsService.crearReview(Reviews);
    }
    editarReview(id, Reviews) {
        return this.ReviewsService.editarReview(id, Reviews);
    }
    eliminarReview(id) {
        return this.ReviewsService.eliminarReview(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'id_lugar', required: false, type: String }),
    __param(0, (0, common_1.Query)('id_lugar')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "getReviews", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "getReviewByID", null);
__decorate([
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "getReviewFromSeguidos", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Reviews_entity_1.Review]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "crearReview", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Reviews_entity_1.Review]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "editarReview", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReviewsController.prototype, "eliminarReview", null);
ReviewsController = __decorate([
    (0, common_1.Controller)('Reviews'),
    (0, swagger_1.ApiTags)('Reviews'),
    __metadata("design:paramtypes", [Reviews_service_1.ReviewsService])
], ReviewsController);
exports.ReviewsController = ReviewsController;
//# sourceMappingURL=Reviews.controller.js.map