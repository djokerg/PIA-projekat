import express from 'express'
import { SpecijalizacijaController } from '../controllers/specijalizacija.controller';



const specijalizacijaRouter = express.Router();

specijalizacijaRouter.route('/dohvSpec').post(
    (req, res)=>new SpecijalizacijaController().dohvSpec(req, res)
)

specijalizacijaRouter.route('/dohvSveSpec').get(
    (req, res)=>new SpecijalizacijaController().dohvSveSpec(req, res)
)

specijalizacijaRouter.route('/dodajSpec').post(
    (req, res)=>new SpecijalizacijaController().dodajSpec(req, res)
)


export default specijalizacijaRouter;