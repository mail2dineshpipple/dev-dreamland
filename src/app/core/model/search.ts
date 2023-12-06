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
    segments: Segment[] | undefined;
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
export interface Segment {
    arrivalApt: string;
    departApt: string;
    departDate: string;
    city:string;
    airport:string;
}
