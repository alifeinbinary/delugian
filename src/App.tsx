import { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import Keyboard from './components/Keyboard'
import KVProvider from './components/KVProvider/KVProvider'
import { Config } from './components/Config'
import ScreenManager from './components/ScreenManager/ScreenManager'
import SidebarProvider from './components/SidebarProvider/SidebarProvider'
import { MainDisplay } from './components/Main'
import MainProvider from './components/MainProvider'
import './i18n/config'

const PracticeScreenLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const ConfigScreenLayout = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`

function App() {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const { key, metaKey } = e
    let preventDefault = true

    if (key === 'q' && metaKey) {
      preventDefault = false
    }

    if (preventDefault) {
      e.preventDefault()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <KVProvider>
      <SidebarProvider>
        <MainProvider>
          <ScreenManager
            practice={
              <PracticeScreenLayout>
                <MainDisplay />
                <Keyboard />
              </PracticeScreenLayout>
            }
            config={
              <ConfigScreenLayout>
                <Config />
              </ConfigScreenLayout>
            }
          />
        </MainProvider>
      </SidebarProvider>
    </KVProvider>
  )
}

export default App
