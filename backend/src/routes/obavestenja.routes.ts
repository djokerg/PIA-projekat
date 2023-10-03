import express from 'express'
import { ObavestenjaController } from '../controllers/obavestenja.controller';


const obavestenjaRouter = express.Router();

obavestenjaRouter.route('/dohvSveZaKor').post(
    (req, res)=>new ObavestenjaController().dohvSveZaKor(req, res)
)

obavestenjaRouter.route('/dodajNovo').post(
    (req, res)=>new ObavestenjaController().dodajNovo(req, res)
)

obavestenjaRouter.route('/procitaj').post(
    (req, res)=>new ObavestenjaController().procitaj(req, res)
)

obavestenjaRouter.route('/obrisi').post(
    (req, res)=>new ObavestenjaController().obrisi(req, res)
)

export default obavestenjaRouter;