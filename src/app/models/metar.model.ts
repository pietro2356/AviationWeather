export interface Metar {
    barometer:       Barometer;
    clouds:          Cloud[];
    dewpoint:        Dewpoint;
    elevation:       Elevation;
    flight_category: string;
    humidity:        Humidity;
    icao:            string;
    observed:        string;
    raw_text:        string;
    station:         Station;
    temperature:     Dewpoint;
    visibility:      Visibility;
    wind:            Wind;
    windchill:       Dewpoint;
}

export interface Barometer {
    hg:  number;
    hpa: number;
    kpa: number;
    mb:  number;
}

export interface Cloud {
    base_feet_agl:   number;
    base_meters_agl: number;
    code:            string;
    feet:            number;
    meters:          number;
    text:            string;
}

export interface Dewpoint {
    celsius:    number;
    fahrenheit: number;
}

export interface Elevation {
    feet:   number;
    meters: number;
}

export interface Humidity {
    percent: number;
}

export interface Station {
    geometry: Geometry;
    location: string;
    name:     string;
    type:     string;
}

export interface Geometry {
    coordinates: number[];
    type:        string;
}

export interface Visibility {
    meters:       string;
    meters_float: number;
    miles:        string;
    miles_float:  number;
}

export interface Wind {
    degrees:   number;
    speed_kph: number;
    speed_kts: number;
    speed_mph: number;
    speed_mps: number;
}
