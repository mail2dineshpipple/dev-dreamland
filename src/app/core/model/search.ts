import { Filter } from "./filters";

export interface SearchRequest {
    flightType: string;
    cabinType: string;
    selectFrom: SelectDetail | undefined;
    selectTo:  SelectDetail | undefined;
    departure: any;
    return: any;
    travellerCabin: boolean;
    adultCounter: number;
    childCounter: number;
    infantCounter: number;
    traveller: number;
    advanceSearch: AdvanceSearch | undefined;
    generalInfo: GeneralInfo | undefined;
    paxDetails: PaxDetails | undefined;
    segments: Segments[] | undefined;
    orderBy:OrderBy
    filter:Filter[],
    minPrice:number,
    maxPrice:number
    minDuration:number,
    maxDuration:number,
    layOverViaPoint:string[]
}

export enum OrderBy{
    Cheapest = 1,
    Fastest = 2,
    BestValue = 3
}

export interface SelectDetail {
    city : string | undefined
    airport : string
}


export interface AdvanceSearch {
    directFlight: boolean;
    isFlexi: boolean;
    maxStops: number;
}
export interface GeneralInfo {
    cabin: string;
    currency: string;
    guid: string;
    journeyType: string;
    tripType: string;
    username: string;
    password: string;
}
export interface PaxDetails {
    adult: number;
    child: number;
    infant: number;
    youth: number;
}
export interface Segments {
    arrivalApt: string;
    departApt: string;
    departDate: string;
    city:string;
    airport:string;
}
