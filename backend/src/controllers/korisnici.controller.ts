import express from 'express'
import KorisnikModel from '../models/korisnik';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import PDFDocument from 'pdfkit';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage });

  
export class KorisnikController{

    generatePDF= (req: express.Request, res: express.Response)=>{
        const data = {
            title: req.body.title,
            content: req.body.content
          };
        
          // Create a PDF document
          const doc = new PDFDocument();
        
          // Pipe the PDF content to a writable stream
          const writeStream = fs.createWriteStream(path.join(__dirname, '../../uploads/') + req.body.name +  '.pdf'); // Adjust the path
          doc.pipe(writeStream);
        
          // Add content to the PDF
          doc.fontSize(20).text(data.title, { align: 'center' });
          doc.fontSize(14).text(data.content);
        
          // Finalize the PDF and save it
          doc.end();
          writeStream.on('finish', () => {
            console.log('PDF saved successfully');
            res.json({ message: 'PDF saved successfully' });
          });
    }

    dodajSlobodan = (req: express.Request, res: express.Response)=>{
        let slobodan= req.body.slobodan;
        let kor_ime= req.body.kor_ime;
        KorisnikModel.updateOne({'korisnicko_ime':kor_ime},{$push:{'dodatno.slobodni_dani':slobodan}},(err,resp)=>{
            if(err) console.log(err);
            else{
                res.json({'msg':'ok'});
            }
        })
    }

    otpremi = (req: express.Request, res: express.Response)=>{
        upload.single('image')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
        return res.status(400).json({ 'error': 'File upload error' });
        } else if (err) {
        return res.status(500).json({ 'error': 'Internal server error' });
        }

        if (!req.file) {
        return res.status(400).json({ 'msg': 'greska' });
        }

        const fileName= req.file.filename;
        // Cuvanje putanje do slike:
        
        return res.status(200).json({ 'msg': 'ok', 'filePath': fileName});
        });
    }

    login = (req: express.Request, res: express.Response)=>{
        let korisnicko_ime = req.body.korisnicko_ime;
        let lozinka = req.body.lozinka;

        KorisnikModel.findOne({'korisnicko_ime':korisnicko_ime, 'lozinka':lozinka},(err,data)=>{
            if(err) console.log(err);
            else{
                res.json(data);
            }
        })
    }

    registracija = (req: express.Request, res: express.Response) =>{
        let korisnik = new KorisnikModel(req.body);

        korisnik.save((err, resp)=>{
            if(err) {console.log(err); res.json({'msg':'Greska'})}
            else{
                res.json({'msg':'Uspesno ste poslali zahtev za registraciju'});
            }
        })
    }

    dohvKorisnike = (req: express.Request, res: express.Response)=>{
        KorisnikModel.find({},(err,resp)=>{
            if(err) console.log(err);
            else{
                res.json(resp);
            }
        })
    }

    dohvKorisnika = (req: express.Request, res: express.Response)=>{
        let kor_ime=req.body.kor_ime;
        KorisnikModel.findOne({'korisnicko_ime':kor_ime},(err,resp)=>{
            if(err) console.log(err);
            else{
                res.json(resp);
            }
        })
    }

    promeniLozinku = (req: express.Request, res: express.Response) =>{
        let kor_ime = req.body.kor_ime;
        let nova = req.body.nova;

        KorisnikModel.updateOne({'korisnicko_ime':kor_ime},{$set:{'lozinka':nova}},(err,resp)=>{
            if(err){
                console.log(err);
                res.json({'msg':'Greska'});
            }else{
                res.json({'msg':'Uspesno promenjena lozinka'});
            }
        })
    }

    azuriraj = (req: express.Request, res: express.Response) =>{
        let k = req.body.k;
        KorisnikModel.updateOne({'korisnicko_ime':k.korisnicko_ime}, {$set: {'profilna_slika':k.profilna_slika, 'ime':k.ime, 'prezime':k.prezime, 'adresa':k.adresa, 'imejl':k.imejl, 'br_telefona':k.br_telefona, 'dodatno':k.dodatno, 'prihvacen':k.prihvacen, 'odbijen':k.odbijen}},(err,resp)=>{
            if(err){
                console.log(err);
                res.json({'msg':'Greska'})
            }else{
                res.json({'msg':"Azurirano"})
            }
        })
    }

    obrisiSliku = (req: express.Request, res: express.Response) =>{
        let filePath = path.join(__dirname,'../../uploads',req.body.filename);
        fs.unlink(filePath, err=>{
            if (err) {
                console.error(err);
            }
            res.json({'msg':'ok'});
        })
    }

    obrisiKorisnika = (req: express.Request, res: express.Response) =>{
        let korisnicko_ime = req.body.korisnicko_ime;

        KorisnikModel.deleteOne({'korisnicko_ime':korisnicko_ime},(err,resp)=>{
            if(err){
                console.log(err);
            }else{
                res.json({'msg':"ok"})
            }
        })
    }
}