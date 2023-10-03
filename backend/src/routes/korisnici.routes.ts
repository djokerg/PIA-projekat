import express from 'express'
import { KorisnikController } from '../controllers/korisnici.controller';


const korisnikRouter = express.Router();

korisnikRouter.route('/login').post(
    (req, res)=>new KorisnikController().login(req, res)
)

korisnikRouter.route('/registracija').post(
    (req, res)=>new KorisnikController().registracija(req, res)
)

korisnikRouter.route('/dohvKorisnike').get(
    (req, res)=>new KorisnikController().dohvKorisnike(req, res)
)

korisnikRouter.route('/dohvKorisnika').post(
    (req, res)=>new KorisnikController().dohvKorisnika(req, res)
)

korisnikRouter.route('/otpremi').post(
    (req, res)=>new KorisnikController().otpremi(req, res)
)

korisnikRouter.route('/promeniLozinku').post(
    (req, res)=>new KorisnikController().promeniLozinku(req, res)
)

korisnikRouter.route('/azuriraj').post(
    (req, res)=>new KorisnikController().azuriraj(req, res)
)

korisnikRouter.route('/obrisiSliku').post(
    (req, res)=>new KorisnikController().obrisiSliku(req, res)
)

korisnikRouter.route('/obrisiKorisnika').post(
    (req, res)=>new KorisnikController().obrisiKorisnika(req, res)
)

korisnikRouter.route('/dodajSlobodan').post(
    (req, res)=>new KorisnikController().dodajSlobodan(req, res)
)

korisnikRouter.route('/generatePDF').post(
    (req, res)=>new KorisnikController().generatePDF(req, res)
)


export default korisnikRouter;