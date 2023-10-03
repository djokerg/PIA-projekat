import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import korisnikRouter from './routes/korisnici.routes';
import path from 'path';
import vrPregledaRouter from './routes/vrsta-pregleda.routes';
import pregledRouter from './routes/pregled.routes';
import izvestajRouter from './routes/izvestaj.routes';
import specijalizacijaRouter from './routes/specijalizacija.routes';
import obavestenjaRouter from './routes/obavestenja.routes';

const app = express();
app.use(cors());
app.use(express.json());
//za prikaz fotografija

mongoose.connect('mongodb://127.0.0.1:27017/baza');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('db connected');
})

const router = express.Router();
router.use('/korisnici', korisnikRouter)
router.use('/vr-pregleda', vrPregledaRouter);
router.use('/pregled', pregledRouter);
router.use('/izvestaj', izvestajRouter);
router.use('/specijalizacija', specijalizacijaRouter);
router.use('/obavestenja', obavestenjaRouter);
router.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));