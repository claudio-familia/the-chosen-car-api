import { Brand, BrandSchema } from "src/features/car/models/schemas/brand.schema";
import { CarType, CarTypeSchema } from "src/features/car/models/schemas/cartype.schema";
import { Country, CountrySchema } from "src/features/general/models/schemas/country.schema";

export const CARSCHEMAS = [
    { name: CarType.name, schema: CarTypeSchema },
    { name: Brand.name, schema: BrandSchema },
]

export const GENERALSCHEMAS = [
    { name: Country.name, schema: CountrySchema },
]

export const SCHEMAS = [
    ...CARSCHEMAS,
    ...GENERALSCHEMAS
]