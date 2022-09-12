"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewModule = void 0;
const common_1 = require("@nestjs/common");
const reviews_service_1 = require("./reviews.service");
const typeorm_1 = require("@nestjs/typeorm");
const reviews_controller_1 = require("./reviews.controller");
const reviews_entity_1 = require("./reviews.entity");
const seguido_module_1 = require("../seguido/seguido.module");
let ReviewModule = class ReviewModule {
};
ReviewModule = __decorate([
    (0, common_1.Module)({
        imports: [seguido_module_1.SeguidoModule, typeorm_1.TypeOrmModule.forFeature([reviews_entity_1.Review])],
        providers: [reviews_service_1.ReviewsService],
        controllers: [reviews_controller_1.ReviewsController],
    })
], ReviewModule);
exports.ReviewModule = ReviewModule;
//# sourceMappingURL=reviews.module.js.map