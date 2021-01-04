import { Brand, BrandSchema } from "src/features/car/models/schemas/brand.schema";
import { CarType, CarTypeSchema } from "src/features/car/models/schemas/car-type.schema";
import { Country, CountrySchema } from "src/features/general/models/schemas/country.schema";
import { State, StateSchema } from "src/features/general/models/schemas/state.schema";

export const CARSCHEMAS = [
    { name: CarType.name, schema: CarTypeSchema },
    { name: Brand.name, schema: BrandSchema },
]

export const GENERALSCHEMAS = [
    { name: Country.name, schema: CountrySchema },
    { name: State.name, schema: StateSchema },
]

export const SCHEMAS = [
    ...CARSCHEMAS,
    ...GENERALSCHEMAS
]