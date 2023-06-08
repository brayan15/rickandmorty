import { useCallback, useEffect, useState } from 'react'

import { CharacterT } from 'src/types'
import apiRestClient from 'src/service/api'

type UseGetCharactersPaginatedT = {
  isLoading: boolean
  characters: CharacterT[]
  getCharacters: () => Promise<void>
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const useGetCharactersPaginated = (name = ''): UseGetCharactersPaginatedT => {
  const [characters, setCharacters] = useState<CharacterT[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)

  const getCharacters = useCallback(async () => {
    try {
      setIsLoading(true)

      const { data } = await apiRestClient().getCharacters({ page, name })

      setCharacters(data.results)
    } catch (_) {
      setCharacters([])
    } finally {
      setIsLoading(false)
    }
  }, [page, name])

  useEffect(() => {
    void getCharacters()
  }, [page, name])

  return {
    setPage,
    isLoading,
    characters,
    getCharacters,
  }
}

export default useGetCharactersPaginated
