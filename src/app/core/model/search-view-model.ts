import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { Cabin, FairType, FlightType } from "../enum/enums";

export interface Search {
    flightType:FlightType,
    isFlexi:boolean,
    segment:Segment[],
    faireType:FairType,
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



