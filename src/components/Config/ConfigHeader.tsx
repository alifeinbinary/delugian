import styled from 'styled-components'
import ArrowBack from 'remixicon-react/ArrowLeftFillIcon'
import SettingsIcon from 'remixicon-react/Settings2FillIcon'
import { useContext } from 'react'
import { MainContext } from '../MainProvider'
import { SidebarContext } from '../SidebarProvider'
import { useTranslation } from 'react-i18next'

const HeaderContainer = styled.div`
  width: 100%;
  height: 96px;
  background-color: #161616;
  text-align: center;
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-between;
  align-items: center;
`

const BackIconContainer = styled.div`
  padding: 8px;
  width: 2em;
  height: 2em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  margin-left: 32px;
`

const SettingsIconContainer = styled.div`
  padding: 8px;
  width: 2em;
  height: 2em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  margin-right: 32px;
`

const ConfigHeader = () => {
  const { setCurrentScreen } = useContext(MainContext)
  const { setIsOpen } = useContext(SidebarContext)
  const { t } = useTranslation()

  return (
    <HeaderContainer>
      <BackIconContainer
        title='Back to main screen'
        onClick={() => setCurrentScreen?.('practice')}
      >
        <ArrowBack color='#1f1f20' />
      </BackIconContainer>
      <h1 className="logo">{t('pages.config.title')}</h1>
      <SettingsIconContainer onClick={() => setIsOpen?.(true)}>
        <SettingsIcon color='#1f1f20' />
      </SettingsIconContainer>
    </HeaderContainer>
  )
}

export default ConfigHeader
