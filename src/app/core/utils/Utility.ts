import { Filter } from "../model/filters";
import { Journey } from "../model/search-result";

export function CheapestFilter(array:Journey[]){
     array.sort(f=> f.fares.totalFare.base.amount);
}