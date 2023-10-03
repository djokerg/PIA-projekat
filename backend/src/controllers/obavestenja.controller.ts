import express from 'express';
import Obavestenje from '../models/obavestenje';

export class ObavestenjaController{

    dohvSveZaKor = (req: express.Request, res: express.Response)=>{
        let kor_ime = req.body.kor_ime;
        Obavestenje.find({'pacijent':kor_ime},(err,resp)=>{
            if(err) console.log(err);
            else{
                res.json(resp);
            }
        })
    }

    dodajNovo = (req: express.Request, res: express.Response)=>{
        Obavestenje.find({}).sort({'id':-1}).then(ob=>{
            let maxId = 0;
            if(ob.length>0) maxId = ob[0].id;

            let obavestenje = new Obavestenje({
                id:(maxId+1),
                naslov:req.body.naslov,
                tekst:req.body.tekst,
                pacijent:req.body.pacijent,
                procitano:req.body.procitano
            })
    
            obavestenje.save((err,resp)=>{
                if(err){
                    console.log(err);
                    res.json({'msg':'Greska'});
                }else{
                    res.json({'msg':'ok'});
                }
            })
        
        })
        
    }

    procitaj = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;

        Obavestenje.updateOne({'id':id},{$set: {'procitano':true}},(err,resp)=>{
            if(err){
                console.log(err);
                res.json({'msg':'Greska'});
            }else{
                res.json({'msg':'ok'});
            }
        })
    }

    obrisi = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;

        Obavestenje.deleteOne({'id':id},(err,resp)=>{
            if(err){
                console.log(err);
                res.json({'msg':'Greska'});
            }else{
                res.json({'msg':'ok'});
            }
        })
    }

}