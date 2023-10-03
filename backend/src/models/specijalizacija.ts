import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Specijalizacija = new Schema({
    naziv: {
        type: String
    },
    id_vr_pregleda: {
        type: Array<Number>
    }
})

export default mongoose.model('Specijalizacija', Specijalizacija, 'specijalizacije')