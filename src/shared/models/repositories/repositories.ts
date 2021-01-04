import { BrandRepostory } from "src/features/car/models/repositories/brand.repository";
import { CarTypeRepostory } from "src/features/car/models/repositories/cartype.repository";
import { CountryRepostory } from "src/features/general/models/repositories/country.repository";
import { StateRepostory } from "src/features/general/models/repositories/state.repository";

export const CARREPOSITORIES = [
    CarTypeRepostory,
    BrandRepostory
]

export const GENERALREPOSITORIES = [
    CountryRepostory,
    StateRepostory
]

export const REPOSITORIES = [
    ...CARREPOSITORIES,
    ...GENERALREPOSITORIES
]