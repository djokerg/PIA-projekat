import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Pregled = new Schema({
    id: {
        type: Number
    },
    lekar: {
        type: String
    },
    datum_vreme: {
        type: Date
    },
    id_vrste: {
        type: Number
    },
    pacijent: {
        type:String
    },
    dodatno:{
        type: Object
    }
})

export default mongoose.model('Pregled', Pregled, 'pregledi')