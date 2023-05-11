import { useContext } from 'react'
import styled from 'styled-components'
import {
} from '../../utils'
import { MainContext } from '../MainProvider'
import SettingsIcon from 'remixicon-react/Settings2FillIcon'
import ConfigIcon from 'remixicon-react/PencilFillIcon'
import { SidebarContext } from '../SidebarProvider'
import { useTranslation } from 'react-i18next'

const MainDisplayContainer = styled.div`
  display: flex;
  z-index: 2;
  align-self: center;
  flex-direction: row;
  gap: 12vw;
`

const MainSection = styled.div`
  width: 100vw;
`

const MainSectionHeader = styled.div`
  margin-bottom: 12px;
  & > h2 {
    margin: 0;
    display: inline-block;
  }
`

const IconContainer = styled.div`
  padding: 8px;
  margin-left: 12px;
  width: 2em;
  height: 2em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  float: right;
  cursor: pointer;
`

const MainDisplay = () => {
  const {
    setCurrentScreen,
  } = useContext(MainContext)
  const { setIsOpen } = useContext(SidebarContext)
  const { t } = useTranslation()

  return (
    <MainDisplayContainer>
      <MainSection>
        <MainSectionHeader>
          <h2 className='logo text-red-500'>{t('pages.home.title')}</h2>
          <IconContainer
            title={t<string>('pages.practice.mode.configModeHint')}
            onClick={() => setCurrentScreen?.('config')}
          >
            <ConfigIcon color='#1f1f20' />
          </IconContainer>
          <IconContainer
            title={t<string>('pages.practice.mode.settingsHint')}
            onClick={() => setIsOpen?.(true)}
          >
            <SettingsIcon color='#1f1f20' />
          </IconContainer>
        </MainSectionHeader>
      </MainSection>
    </MainDisplayContainer>
  )
}

export default MainDisplay
