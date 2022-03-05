export interface Station {
    id:        string;
    city:      string;
    country:   Country;
    elevation: Elevation;
    geometry:  Geometry;
    iata:      string;
    icao:      string;
    latitude:  Itude;
    longitude: Itude;
    name:      string;
    status:    string;
    timezone:  Timezone;
    type:      string;
}

export interface Country {
    code: string;
    name: string;
}

export interface Elevation {
    feet:   number;
    meters: number;
}

export interface Geometry {
    coordinates: number[];
    type:        string;
}

export interface Itude {
    decimal: number;
    degrees: string;
}

export interface Timezone {
    dst:  number;
    gmt:  string;
    tzid: string;
    zone: string;
}
