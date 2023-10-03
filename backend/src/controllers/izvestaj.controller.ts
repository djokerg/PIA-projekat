import express from 'express';
import Izvestaj from '../models/izvestaj';

export class IzvestajController{

    dohvSveZaKor = (req: express.Request, res: express.Response)=>{
        let kor_ime = req.body.kor_ime;
        Izvestaj.find({'pacijent':kor_ime},(err,resp)=>{
            if(err) console.log(err);
            else{
                res.json(resp);
            }
        })
    }

    dodajNovi = (req: express.Request, res: express.Response)=>{
        Izvestaj.find({}).sort({'id':-1}).then(izvestaji=>{
            let maxId = 0;
            if(izvestaji.length>0) maxId = izvestaji[0].id;
            
            let izvestaj = new Izvestaj({
                id:(maxId+1),
                datum_vreme: req.body.datum_vreme,
                lekar: req.body.lekar,
                razlog_dolaska:req.body.razlog_dolaska,
                dijagnoza:req.body.dijagnoza,
                prep_terapija:req.body.prep_terapija,
                prep_datum:req.body.prep_datum,
                pacijent:req.body.pacijent
            })

            izvestaj.save((err,resp)=>{
                if(err){
                    console.log(err);
                    res.json({'msg':'Greska'});
                }else{
                    res.json({'msg':'Uspesno dodat izvestaj'});
                }
            })
        })
    }

}