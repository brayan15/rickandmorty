import { useState } from 'react'

import { LocationT } from 'src/types'
import apiRestClient from 'src/service/api'

type UseGetLocationByIdT = {
  isLoading: boolean
  location: LocationT | null
  getLocationById: (id: string) => Promise<void>
}

const useGetLocationById = (): UseGetLocationByIdT => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [location, setLocation] = useState<LocationT | null>(null)

  const getLocationById = async (id: string) => {
    try {
      setIsLoading(true)
      const { data } = await apiRestClient().getLocationById(id)

      setLocation(data)
    } catch (_) {
      setLocation(null)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    location,
    isLoading,
    getLocationById,
  }
}

export default useGetLocationById
