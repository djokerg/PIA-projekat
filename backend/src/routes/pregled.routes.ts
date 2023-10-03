import express from 'express'
import { PregledController } from '../controllers/pregled.controller';



const pregledRouter = express.Router();

pregledRouter.route('/dohvSve').get(
    (req, res)=>new PregledController().dohvSve(req, res)
)

pregledRouter.route('/zakazi').post(
    (req, res)=>new PregledController().zakazi(req, res)
)

pregledRouter.route('/dohvSveZaKor').post(
    (req, res)=>new PregledController().dohvSveZaKor(req, res)
)

pregledRouter.route('/otkazi').post(
    (req, res)=>new PregledController().otkazi(req, res)
)
export default pregledRouter;