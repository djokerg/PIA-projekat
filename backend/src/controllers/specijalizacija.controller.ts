import express from 'express';
import Specijalizacija from '../models/specijalizacija';

export class SpecijalizacijaController{
    dohvSpec = (req: express.Request, res: express.Response)=>{
        let naziv = req.body.naziv
        Specijalizacija.findOne({'naziv':naziv},(err,resp)=>{
            if(err) console.log(err);
            else{
                res.json(resp);
            }
        })
    }

    dohvSveSpec = (req: express.Request, res: express.Response)=>{
        
        Specijalizacija.find({},(err,resp)=>{
            if(err) console.log(err);
            else{
                res.json(resp);
            }
        })
    }

    dodajSpec = (req: express.Request, res: express.Response)=>{
        let specijal = new Specijalizacija({
            naziv:req.body.naziv,
            id_vr_pregleda:req.body.id_vr_pregleda
        })

        specijal.save((err,resp)=>{
            if(err){
                console.log(err);
                res.json({'msg':'Greska'});
            }else{
                res.json({'msg':'Uspesno dodata specijalizacija'});
            }
        })
    }
}