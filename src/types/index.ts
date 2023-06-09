import { AxiosResponse } from 'axios'

export type CharacterExtraT = {
  name: string
  url: string
}

export type LocationT = {
  id: number
  url: string
  name: string
  type: string
  created: string
  dimension: string
  residents: string[]
}

export type CharacterT = {
  id: number
  url: string
  name: string
  type: string
  image: string
  gender: string
  status: string
  species: string
  created: string
  episode: string[]
  origin: CharacterExtraT
  location: CharacterExtraT
}

export type PaginatedResponseT<T> = {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: T[]
}

export type ServiceResponseT<T> = Promise<AxiosResponse<T>>

export type QueryParamT = {
  [key: string]: string | number
}
