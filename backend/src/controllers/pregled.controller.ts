import express from 'express';
import Pregled from '../models/pregled';

export class PregledController{
    zakazi = (req: express.Request, res: express.Response)=>{
        Pregled.find({}).sort({'id':-1}).then(pregledi=>{
            let maxId = 0;
            if(pregledi.length>0) maxId = pregledi[0].id;
            
            let pregled = new Pregled({
                id:(maxId+1),
                lekar: req.body.lekar,
                datum_vreme: req.body.datum_vreme,
                pacijent:req.body.pacijent,
                id_vrste:req.body.id_vrste
            })

            pregled.save((err,resp)=>{
                if(err){
                    console.log(err);
                }else{
                    res.json(pregled);
                }
            })
        })
    }

    dohvSve = (req: express.Request, res: express.Response)=>{
        Pregled.find({},(err,resp)=>{
            if(err) console.log(err);
            else{
                res.json(resp);
            }
        })
    }

    dohvSveZaKor = (req: express.Request, res: express.Response)=>{
        let kor_ime = req.body.kor_ime;
        Pregled.find({'pacijent':kor_ime},(err,resp)=>{
            if(err) console.log(err);
            else{
                res.json(resp);
            }
        })
    }

    otkazi = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;
        Pregled.deleteOne({'id':req.body.id},(err,resp)=>{
            if(err){
                console.log(err);
                res.json({'msg':'Greska'})
            }else{
                res.json({'msg':'Uspesno otkazan pregled'});
            }
        })
    }

}