import { Injectable } from '@nestjs/common';
import { Review } from './Reviews.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { UsuariosController } from 'src/usuarios/usuarios.controller';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { SeguidoService } from 'src/seguido/seguido.service';
import { Seguido } from 'src/seguido/seguido.entity';

@Injectable()
export class ReviewsService {
    constructor(
        @InjectRepository(Review)
        private Reviews: Repository<Review>,
        private usuariosService: UsuariosService,
        private seguidosService: SeguidoService,
    ) { }

    getReview(): Promise<Review[]> {
        return this.Reviews.find();
    }

    getReviewbyID (id: number): Promise<Review> {
        return this.Reviews.findOneBy({ IdReview: id });
    }

    crearReview(Review: Review) {
        return this.Reviews.save(Review);
    }

    editarReview(id: number, Review: Review) {
        return this.Reviews.update(id, Review);
    }

    async eliminarReview(id: number): Promise<void>  {
        await this.Reviews.delete(id);
    }

    getReviewSeguidos(id: number){
        //recibe el id de el usuario, ahi hace get de todos los que sigue, y ahi busca todas las reviews que sean de sus seguidos
         let seguidos = this.seguidosService.getSeguidos(id) : Seguido[]
        seguidos.forEach(element => {
            this.getReviewbyID(element.id)
        });


    }

}
