import create from 'zustand'
import { persist } from 'zustand/middleware'

type SettingsStore = {
  dark: boolean,
  toggleDarkMode: (props: any) => void,
}

const useSettingsStore = create<SettingsStore>(
  persist(
    (set, get) => ({
      dark: false,
      toggleDarkMode: (): any => set({ dark: !get().dark }),
    }),
    { name: 'user_settings' }
  )
)

export default useSettingsStore