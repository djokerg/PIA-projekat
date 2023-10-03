import express from 'express';
import VrstaPregleda from '../models/vrsta-pregleda';
import Specijalizacija from '../models/specijalizacija';
export class VrPregledaController{
    dohvSve = (req: express.Request, res: express.Response)=>{
        VrstaPregleda.find({},(err,resp)=>{
            if(err) console.log(err);
            else{
                res.json(resp);
            }
        })
    }

    dohvVrstu = (req: express.Request, res: express.Response)=>{
        VrstaPregleda.findOne({'id':req.body.id},(err,resp)=>{
            if(err) console.log(err);
            else{
                res.json(resp);
            }
        })
    }

    dodajLekara = (req: express.Request, res: express.Response)=> {
        let kor_ime = req.body.kor_ime;
        let id_vr = req.body.id_vr;
        VrstaPregleda.updateOne({'id':id_vr},{$push:{'lekari':kor_ime}},(err,resp)=>{
            if(err) console.log(err);
            else{
                res.json(resp);
            }
        })
    }

    dodajNovu = (req: express.Request, res: express.Response)=> {
        VrstaPregleda.find({}).sort({'id':-1}).then(pregledi=>{
            let maxId = 0;
            if(pregledi.length>0) maxId = pregledi[0].id;
            Specijalizacija.updateOne({'naziv':req.body.spec},{$push:{'id_vr_pregleda':(maxId+1)}},(err,resp)=>{
                if(err){
                    console.log(err);
                }else{
                    
                }
            });
            let vrpregled = new VrstaPregleda({
                id:(maxId+1),
                naziv:req.body.naziv,
                trajanje:req.body.trajanje,
                cena:req.body.cena,
                lekari:req.body.lekari,
                prihvacena:req.body.prihvacena,
                odbijena:req.body.odbijena,
                obrisana:req.body.obrisana
            })

            vrpregled.save((err,resp)=>{
                if(err){
                    console.log(err);
                    res.json({'msg':'Greska'});
                }else{
                    res.json({'msg':'Uspesno dodata vrsta pregleda'});
                }
            })
        })
    }

    azuriraj = (req: express.Request, res: express.Response)=>{
        VrstaPregleda.updateOne({'id':req.body.id},{$set: {'naziv':req.body.naziv,'trajanje':req.body.trajanje,'cena':req.body.cena,'prihvacena':req.body.prihvacena,'odbijena':req.body.odbijena,'obrisana':req.body.obrisana}},(err,resp)=>{
            if(err) console.log(err);
            else{
                res.json(resp);
            }
        })
    }
}