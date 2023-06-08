import { useCallback, useState } from 'react'

import { CharacterT } from 'src/types'
import apiRestClient from 'src/service/api'

type UseGetCharactersPaginatedT = {
  pages: number
  isLoading: boolean
  characters: CharacterT[]
  getCharacters: (page?: number, name?: string) => Promise<void>
}

const useGetCharactersPaginated = (): UseGetCharactersPaginatedT => {
  const [characters, setCharacters] = useState<CharacterT[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pages, setPages] = useState<number>(0)

  const getCharacters = useCallback(async (page = 1, name = '') => {
    try {
      setIsLoading(true)

      const { data } = await apiRestClient().getCharacters({ page, name })

      setPages(data.info.pages)
      setCharacters(data.results)
    } catch (_) {
      setPages(0)
      setCharacters([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    pages,
    isLoading,
    characters,
    getCharacters,
  }
}

export default useGetCharactersPaginated
