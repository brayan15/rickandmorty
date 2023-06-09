import { useState } from 'react'

import { CharacterT } from 'src/types'
import apiRestClient from 'src/service/api'

type UseGetCharacterByIdT = {
  isLoading: boolean
  character: CharacterT | null
  getCharacterById: (id: string) => Promise<void>
}

const useGetCharacterById = (): UseGetCharacterByIdT => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [character, setCharacter] = useState<CharacterT | null>(null)

  const getCharacterById = async (id: string) => {
    try {
      setIsLoading(true)
      const { data } = await apiRestClient().getCharacterById(id)

      setCharacter(data)
    } catch (_) {
      setCharacter(null)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    character,
    isLoading,
    getCharacterById,
  }
}

export default useGetCharacterById
