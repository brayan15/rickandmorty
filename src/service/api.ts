import axios from 'axios'

import { PaginatedResponseT, CharacterT, ServiceResponseT, QueryParamT } from 'src/types'

type ApiRestClientT = {
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

  return {
    getCharacters,
  }
}

export default apiRestClient
