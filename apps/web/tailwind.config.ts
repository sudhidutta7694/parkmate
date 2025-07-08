import { Config } from 'tailwindcss'
import preset from '@parkmate/ui/tailwind.config'

const config: Config = {
  presets: [preset],
  content: ['./src/**/*.{ts,tsx}', '@parkmate/ui/**/*.{ts,tsx}'],
}

export default config