import { BrandService } from "src/features/car/services/brand.service";
import { CartypeService } from "src/features/car/services/cartype.service";
import { CountryService } from "src/features/general/services/country.service";
import { StateService } from "src/features/general/services/state.service";

export const CARSERVICES = [
    CartypeService,
    BrandService
]
export const GENERALSERVICES = [
    CountryService,
    StateService
]
export const SERVICES = [
    ...CARSERVICES,
    ...GENERALSERVICES
]