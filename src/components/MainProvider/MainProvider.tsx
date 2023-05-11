import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import {
  AvailableScreensType,
  SCALE_LENGTH,
} from '../../utils'

interface NoteTracker {
  currentMidiNumber: number
  nextTargetMidiNumber: number
  prevNote?: number
  noteCounter: number
}

type TrainerContextType = {
  children?: React.ReactNode

  /** Responsible for storing the current chord being played */
  chordStack?: number[]
  setChordStack?: Dispatch<SetStateAction<number[]>>
  /** Keeps track of where we are in the scale, etc. */
  noteTracker?: NoteTracker
  setNoteTracker?: Dispatch<SetStateAction<NoteTracker>>

  // Settings
  currentScreen?: AvailableScreensType
  setCurrentScreen?: Dispatch<SetStateAction<AvailableScreensType>>
}

export const MainContext = createContext({} as TrainerContextType)

const MainProvider: FC<TrainerContextType> = ({ children }) => {


  const [chordStack, setChordStack] = useState<number[]>([])
  const [currentScreen, setCurrentScreen] =
    useState<AvailableScreensType>('practice')
  const [isScalePingPong, setIsScalePingPong] = useState(false)
  const [isHardModeEnabled, setIsHardModeEnabled] = useState(false)

  const [_isGoingDown, _setIsGoingDown] = useState(false)

  const context: TrainerContextType = {
    chordStack,
    setChordStack,
    currentScreen,
    setCurrentScreen,
  }



  return (
    <MainContext.Provider value={context}>
      {children}
    </MainContext.Provider>
  )
}

export default MainProvider
