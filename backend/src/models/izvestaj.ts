import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Izvestaj = new Schema({
    id: {
        type: Number
    },
    datum_vreme: {
        type: Date
    },
    lekar: {
        type: String
    },
    razlog_dolaska: {
        type: String
    },
    dijagnoza: {
        type:String
    },
    prep_terapija: {
        type:String
    },
    prep_datum:{
        type:Date
    },
    pacijent: {
        type: String
    }
})

export default mongoose.model('Izvestaj', Izvestaj, 'izvestaji')