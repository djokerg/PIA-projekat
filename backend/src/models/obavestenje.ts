import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Obavestenje = new Schema({
    id:{
        type:Number
    },
    naslov: {
        type: String
    },
    tekst: {
        type: String
    },
    pacijent: {
        type: String
    },
    procitano: {
        type: Boolean
    }
})

export default mongoose.model('Obavestenje', Obavestenje, 'obavestenja')