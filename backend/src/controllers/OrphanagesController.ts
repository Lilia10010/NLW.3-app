//para inserir no bd
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Orphanage from '../models/Orphanage'



export default{
    async index(request: Request, response: Response){
        const orphanegesRepository = getRepository(Orphanage)

        //listar orphanages
        const orphanages = await orphanegesRepository.find()

        return response.json(orphanages)
        

    },
    async show(request: Request, response: Response){
        //pegar o id (tem quer ser o mesmo nome que coloca em routes.ts)
        const { id } = request.params

        const orphanegesRepository = getRepository(Orphanage)

        //listar orphanages
        const orphanage = await orphanegesRepository.findOneOrFail(id)

        return response.json(orphanage)
        

    },

    async create(request: Request, response: Response){
    // console.log(request.body) 
    const{
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body

    const orphanegesRepository = getRepository(Orphanage)

    //tabela précriada
    const orphanage = orphanegesRepository.create({ 
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
     })

     //tabela salva no bd

     await orphanegesRepository.save(orphanage)

     //colocar o status 201 (opcional) para deixar api mais organizada
    return response.status(201).json( orphanage )
    }
}