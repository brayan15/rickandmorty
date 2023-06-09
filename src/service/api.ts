import axios from 'axios'

import { PaginatedResponseT, CharacterT, ServiceResponseT, QueryParamT, LocationT } from 'src/types'

type ApiRestClientT = {
  getLocationById: (id: string) => ServiceResponseT<LocationT>
  getCharacterById: (id: string) => ServiceResponseT<CharacterT>
  getCharacters: (params: QueryParamT) => ServiceResponseT<PaginatedResponseT<CharacterT>>
}

const apiRestClient = (): ApiRestClientT => {
  const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/', // Better if use .env, but for this test I'm not using .env
  })

  const getCharacters = async (
    params: QueryParamT,
  ): ServiceResponseT<PaginatedResponseT<CharacterT>> => {
    return api.get('character', { params })
  }

  const getCharacterById = async (id: string): ServiceResponseT<CharacterT> => {
    return api.get(`character/${id}`)
  }

  const getLocationById = async (id: string): ServiceResponseT<LocationT> => {
    return api.get(`location/${id}`)
  }

  return {
    getCharacters,
    getLocationById,
    getCharacterById,
  }
}

export default apiRestClient
