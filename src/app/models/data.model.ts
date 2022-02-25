import { Observable } from "rxjs";
import { Metar } from "./metar.model";
import { Station } from "./station.model";
import { Taf } from "./taf.model";

export class Data {

    constructor(){}

    setMetar(metar_data: Observable<Metar>): Array<Metar>{
        const metar = new Array<Metar>();
        metar_data.forEach((item: any) => {
            metar.push(item);
        })

        return metar;
    }

    setStation(station_data: Observable<Station>): Array<Station>{
        const station = new Array<Station>();
        station_data.forEach((item: any) => {
            station.push(item);
        })

        return station;
    }

    setTaf(taf_data: Observable<Metar>): Array<Taf>{
        const taf = new Array<Taf>();
        taf_data.forEach((item: any) => {
            taf.push(item);
        })

        return taf;
    }
}
