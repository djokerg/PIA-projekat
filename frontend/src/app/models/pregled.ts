import { VrPregleda } from "./vr-pregleda";

export class Pregled{
    id: number;
    lekar: string;
    datum_vreme: Date;
    pacijent:string;
    id_vrste:number;
    //additional data
    ogranak:string;
    l_ime_prezime:string;
    datum_formatted:string;
    p_ime_prezime:string;
    vrsta:VrPregleda;
}