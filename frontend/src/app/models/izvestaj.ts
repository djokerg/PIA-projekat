export class Izvestaj{
    id: number;
    datum_vreme: Date;
    lekar: string;
    razlog_dolaska:string;
    dijagnoza:string;
    prep_terapija: string;
    prep_datum: Date;
    pacijent:string;
    //additional data
    specijalizacija:string;
    l_ime_prezime:string;
    datum_formatted:string;
    prep_formatted:string;
}