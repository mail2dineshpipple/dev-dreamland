import { DISPLAYFILTERLIMIT } from "../constants";
import { Filter } from "../model/filters";

export const Filters: Filter[] = [
    // { id: 1, name: 'Cheapest', value: undefined , category : "Popular",isPopular:false,isApplied:false,html:undefined, activeImg:'', inActiveImg:''  ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    // { id: 2, name: 'Fastest', value: undefined,category : "Popular",isPopular:false ,isApplied:false,html:undefined , activeImg:'', inActiveImg:'' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    // { id: 3, name: 'Best Value', value: undefined ,category : "Popular",isPopular:false,isApplied:false,html:undefined , activeImg:'', inActiveImg:'' ,disabled:false,layOverPoints:[], minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 4, name: 'Refundable', value: undefined,category : "Popular",isPopular:false ,isApplied:false,html:undefined , activeImg:'', inActiveImg:'' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 5, name: 'Non-Refundable', value: undefined ,category : "Popular",isPopular:false,isApplied:false,html:undefined , activeImg:'', inActiveImg:'' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 8, name: '0', value: undefined ,category : "Stops",isPopular:false,isApplied:false,html:'<span>(Non-Stop)</span>' , activeImg:'', inActiveImg:'' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 9, name: '1', value: undefined ,category : "Stops",isPopular:false,isApplied:false,html:'<span>(Stop)</span>' , activeImg:'', inActiveImg:'' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 10, name: '2+', value: undefined ,category : "Stops",isPopular:false,isApplied:false,html:'<span>(Stop)</span>' , activeImg:'', inActiveImg:'' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 11, name: 'Before 6AM', value: undefined ,category : "Departure Time",isPopular:false,isApplied:false,html:undefined , activeImg:'assets/images/night_active.png', inActiveImg:'assets/images/night_inactive.png' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 12, name: '6AM-12PM', value: undefined ,category : "Departure Time",isPopular:false,isApplied:false,html:undefined , activeImg:'assets/images/morning_active.png', inActiveImg:'assets/images/morning_inactive.webp' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 13, name: '12PM-6PM', value: undefined ,category : "Departure Time",isPopular:false,isApplied:false,html:undefined , activeImg:'assets/images/noon_active.png', inActiveImg:'assets/images/noon_inactive.webp' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 14, name: 'After 6PM', value: undefined ,category : "Departure Time",isPopular:false,isApplied:false,html:undefined , activeImg:'assets/images/evening_active.png', inActiveImg:'assets/images/evening_inactive.png' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 15, name: 'Before 6AM', value: undefined ,category : "Arrival Time",isPopular:false,isApplied:false,html:undefined , activeImg:'assets/images/night_active.png', inActiveImg:'assets/images/night_inactive.png' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 16, name: '6AM-12PM', value: undefined ,category : "Arrival Time",isPopular:false,isApplied:false,html:undefined , activeImg:'assets/images/morning_active.png', inActiveImg:'assets/images/morning_inactive.webp' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 17, name: '12PM-6PM', value: undefined ,category : "Arrival Time",isPopular:false,isApplied:false,html:undefined , activeImg:'assets/images/noon_active.png', inActiveImg:'assets/images/noon_inactive.webp' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 18, name: 'After 6PM', value: undefined ,category : "Arrival Time",isPopular:false,isApplied:false,html:undefined , activeImg:'assets/images/evening_active.png', inActiveImg:'assets/images/evening_inactive.png' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 6, name: 'Price ', value: undefined ,category : "Price",isPopular:false,isApplied:false,html:undefined , activeImg:'', inActiveImg:'' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },
    { id: 6, name: 'Duration ', value: undefined ,category : "Duration",isPopular:false,isApplied:false,html:undefined , activeImg:'', inActiveImg:'' ,disabled:false , layOverPoints:[] , minValue:0, maxValue:0 ,displayFilterLimit:DISPLAYFILTERLIMIT },

]  