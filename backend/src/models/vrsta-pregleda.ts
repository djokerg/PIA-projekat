import mongoose from "mongoose";

const Schema = mongoose.Schema;

let VrstePregleda = new Schema({
    id: {
        type: Number
    },
    naziv: {
        type: String
    },
    trajanje: {
        type: Number
    },
    cena: {
        type: Number
    },
    lekari: {
        type: Array<String>
    },
    prihvacena: {
        type: Boolean
    },
    odbijena: {
        type: Boolean
    },
    obrisana: {
        type: Boolean
    }
})

export default mongoose.model('VrstePregleda', VrstePregleda, 'vrste_pregleda')