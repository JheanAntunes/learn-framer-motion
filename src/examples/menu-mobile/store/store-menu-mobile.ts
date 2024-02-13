import { create, StateCreator } from 'zustand'

type States = {
  isMenuMobile: boolean
}

type Actions = {
  toggleMenuMobile: () => void
  closeMenuMobile: () => void
}

type StoreMenuMobile = States & Actions

const storeMenuMobile: StateCreator<StoreMenuMobile> = (set) => ({
  isMenuMobile: false,
  toggleMenuMobile: () => {
    set((state) => ({ isMenuMobile: !state.isMenuMobile }))
  },
  closeMenuMobile: () => {
    set(() => ({ isMenuMobile: false }))
  }
})

export const useStoreMenuMobile = create<StoreMenuMobile>()(storeMenuMobile)
