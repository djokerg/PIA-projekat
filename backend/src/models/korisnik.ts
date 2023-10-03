import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Korisnik = new Schema({
    korisnicko_ime: {
        type: String
    },
    lozinka: {
        type: String
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    adresa: {
        type: String
    },
    br_telefona: {
        type: String
    },
    imejl: {
        type: String
    },
    tip: {
        type: String
    },
    dodatno: {
        type: Object
    },
    profilna_slika: {
        type: String
    },
    prihvacen:{
        type:Boolean
    },
    odbijen: {
        type: Boolean
    }
})

export default mongoose.model('KorisnikModel', Korisnik, 'korisnici')