export interface SearchResult {
    onwardJourneys: Journey[];
    returnJourneys: Journey[];
    isDomestic:     boolean;
}

export enum SavingFaireType {
    Saving = 'Saving Fare',
    SME = 'SME Fare',
    Flexi = 'SME Fare'
}

export interface Journey {
    fares:             Fares;
    savingFaireType:   SavingFaireType;         
    allowBlocking:     boolean;
    isMultiCar:        boolean;
    isNearByAirport:   boolean;
    flightKey:         string;
    showCrossedFare:   boolean;
    fareKey:           string;
    isOffline:         boolean;
    isOnlyHandBaggage: boolean;
    seatsLeft:         number;
    flights:           Flight[];
    key:               string;
    messages:          Messages;
    journeyInfo:       JourneyInfo[];
    displaySavingFaireType: boolean;
}

export interface Fares {
    paxFares:  PaxFares;
    totalFare: TotalFare;
}

export interface PaxFares {
    adt: TotalFare;
}

export interface TotalFare {
    base:  Base;
    total: Base;
    tax:   Base;
    tds?:  Base;
}

export interface Base {
    amount: number;
}

export interface Flight {
    key:               number;
    carrier:           Carrier;
    depDetail:         Detail;
    arrDetail:         Detail;
    flightNo:          string;
    classDetail:       ClassDetail;
    flyTime:           number;
    amenities:         Amenities;
    nextDayArr:        boolean;
    refundable?:       boolean;
    onlyHandbag:       boolean;
    cabinClass:        CabinClass;
    fareType:          FareType;
    aircraftType?:     AircraftType;
    layover?:          number;
    stops?:            number;
    stopDetail?:       Carrier[];
    isReturn?:         boolean;
    operatingCarrier?: Carrier;
}

export enum AircraftType {
    AirbusA319 = "Airbus A319",
    AirbusA320 = "Airbus A320",
    AirbusA321 = "Airbus A321",
    Boeing777300 = "Boeing 777-300",
    The32N = "32N",
    The77L = "77L",
}

export interface Amenities {
    baggage: Baggage;
    meal:    boolean;
    smoke?:  boolean;
}

export interface Baggage {
    cabin:   Cabin;
    checkin: Checkin;
}

export interface Cabin {
    adt: CabinADT;
}

export interface CabinADT {
    desc: PurpleDesc;
    unit: Unit;
    qty:  number;
}

export enum PurpleDesc {
    The7Kg = "7 Kg",
    The8Kg = "8 Kg",
}

export enum Unit {
    Kg = "kg",
    PC = "pc",
}

export interface Checkin {
    adt: CheckinADT;
}

export interface CheckinADT {
    desc:  FluffyDesc;
    unit:  Unit;
    qty:   number;
    isAvl: boolean;
    code?: ADTCode;
}

export enum ADTCode {
    Null = "null",
}

export enum FluffyDesc {
    The15Kg = "15 kg",
    The15KgBaggage = "15 kg baggage",
    The1Pcs = "1 PCS",
    The20KgBaggageIncluded = "20Kg Baggage included",
    The25KgBaggageIncluded = "25Kg Baggage included",
}

export interface Detail {
    time:      Date;
    terminal?: string;
    code:      ArrDetailCode;
    name:      City;
    country:   Country;
    city:      City;
}

export enum City {
    Delhi = "Delhi",
    Goa = "Goa",
    Hyderabad = "Hyderabad",
    Mumbai = "Mumbai",
    Patna = "Patna",
}

export enum ArrDetailCode {
    BOM = "BOM",
    Del = "DEL",
    Goi = "GOI",
    Hyd = "HYD",
    Pat = "PAT",
}

export enum Country {
    India = "India",
}

export enum CabinClass {
    Economy = "ECONOMY",
    Others = "OTHERS",
}

export interface Carrier {
    code: CarrierCode;
    name: Name;
}

export enum CarrierCode {
    AI = "AI",
    I5 = "I5",
    Idr = "IDR",
    Sg = "SG",
    Uk = "UK",
}

export enum Name {
    AirAsiaIndia = "AirAsia India",
    AirIndia = "AirIndia",
    Indore = "Indore",
    SpiceJet = "SpiceJet",
    Vistara = "Vistara",
}

export interface ClassDetail {
    adt: ClassDetailADT;
}

export interface ClassDetailADT {
    class: string;
    basis: string;
}

export enum FareType {
    Empty = "",
    RegularFare = "Regular Fare",
    RetailFare = "Retail Fare",
}

export interface JourneyInfo {
    journeyTime: number;
}

export interface Messages {
    OFFLINE: Offline[];
}

export enum Offline {
    RegularFare = "Regular Fare",
    RetailFare = "Retail Fare",
    RetailFares = "Retail Fares",
}
