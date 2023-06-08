import { RootState } from '../'
import { CharacterT } from 'src/types'

export const searchTemrSelector = (store: RootState): string => store.app.searchTerm
export const recentlyViewedSelector = (store: RootState): CharacterT[] => store.app.recentlyViewed
