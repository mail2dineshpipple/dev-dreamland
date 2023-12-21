import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { Cabin, FairType, FlightType } from "../enum/enums";
import { Filter } from "./filters";
import { OrderBy } from "./search";
// import { FilterRequest } from "./search";

export interface Search {
    flightType:FlightType,
    isFlexi:boolean,
    segment:Segment[],
    faireType:FairType,
    filter: Filter[],
    orderBy:OrderBy ;
}

export interface Segment {
    fromCity: string,
    fromAirport: string,
    fromCityCode:string;
    toCity: string,
    toAirport: string,
    toCityCode:string;
    fromDate: NgbDate,
    toDate: NgbDate,
    travelAndCabin:TravelAndCabin | undefined,
    showTravel:boolean;
}

export interface TravelAndCabin{
    adult:number,
    children:number,
    infants:number,
    cabin:Cabin,
}



