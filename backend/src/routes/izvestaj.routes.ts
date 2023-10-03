import express from 'express'
import { IzvestajController } from '../controllers/izvestaj.controller';



const izvestajRouter = express.Router();

izvestajRouter.route('/dohvSveZaKor').post(
    (req, res)=>new IzvestajController().dohvSveZaKor(req, res)
)

izvestajRouter.route('/dodajNovi').post(
    (req, res)=>new IzvestajController().dodajNovi(req, res)
)

export default izvestajRouter;