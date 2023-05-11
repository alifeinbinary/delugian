import { useContext } from 'react'
import { MainContext } from '../MainProvider'

interface ScreenManagerProps {
  practice: JSX.Element
  config: JSX.Element
}

const ScreenManager = ({ practice, config }: ScreenManagerProps) => {
  const { currentScreen } = useContext(MainContext)
  if (currentScreen === 'practice') {
    return practice
  } else if (currentScreen === 'config') {
    return config
  }

  return null
}

export default ScreenManager
