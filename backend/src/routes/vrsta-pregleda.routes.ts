import express from 'express'
import { VrPregledaController } from '../controllers/vrsta-pregleda.controller';


const vrPregledaRouter = express.Router();

vrPregledaRouter.route('/dohvSve').get(
    (req, res)=>new VrPregledaController().dohvSve(req, res)
)

vrPregledaRouter.route('/dohvVrstu').post(
    (req, res)=>new VrPregledaController().dohvVrstu(req, res)
)

vrPregledaRouter.route('/dodajLekara').post(
    (req, res)=>new VrPregledaController().dodajLekara(req, res)
)

vrPregledaRouter.route('/dodajNovu').post(
    (req, res)=>new VrPregledaController().dodajNovu(req, res)
)

vrPregledaRouter.route('/azuriraj').post(
    (req, res)=>new VrPregledaController().azuriraj(req, res)
)



export default vrPregledaRouter;