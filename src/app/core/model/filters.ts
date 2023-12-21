export interface Filter{
    name:string,
    value:string|undefined,
    id:number,
    category:string,
    isPopular:boolean,
    isApplied:boolean,
    html:string|undefined,
    activeImg:string,
    inActiveImg:string,
    disabled:boolean,
    minValue:number,
    maxValue:number,
    layOverPoints:[]|undefined;   
    displayFilterLimit:number; 
}

export interface LayoverPoint{
    isApplied:boolean,
    LayoverPointName:string
}