import { Farmer } from "../../models/Farmer";
import { FarmerSearchParams } from "../../models/FarmerSearchParams";


export declare abstract class FarmerSearchAbstractProvider {
    abstract searchFarmers(params: FarmerSearchParams): Promise<Farmer[]>;
}