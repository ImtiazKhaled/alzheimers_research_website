import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './about'
import Research from './research'
import Community from './community'
import Dementia from './dementia'
import Outreach from './outreach'
import SocialLinks from './social_links'
import Home from './home'
import { setLanguage, t } from 'react-switch-lang'
import { Modal, ModalHeader, ModalBody, ModalFooter, SIZE, ROLE } from 'baseui/modal'
import { ButtonGroup } from "baseui/button-group"
import { Button } from "baseui/button"


const Navigation = (props) => {
  const [ isOpen, setIsOpen ] = React.useState(false)
  const [ lang, setLang ] = React.useState('en')

  React.useEffect(() => {
    setIsOpen(true)
  }, [])

  const LanguageSelected = (selected) => {
    switch(selected) {
      case 'KOR':
        setLang('ko')
        setLanguage('ko')
        break
      case 'CHI':
        setLang('zh')
        setLanguage('zh')
        break
      default:
        setLang('en')
        setLanguage('en')
    }

    setIsOpen(false)
  }

  return (
    <div>
      <Switch>
        <Route lang={lang} path='/community'>
          <Community />
        </Route>
        <Route path='/research'>
          <Research />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/dementia'>
          <Dementia />
        </Route>
        <Route path='/outreach'>
          <Outreach />
        </Route>
        <Route path='/'>
          <Home lang={lang} changeTheme={() => props.changeTheme()} />
        </Route>
      </Switch>

      <Modal onClose={() => setIsOpen(false)} closeable isOpen={isOpen} animate autoFocus size={SIZE.auto} role={ROLE.dialog}>
        <ModalHeader> {t('welcomeTo,')} {t('researchProject')} </ModalHeader>
        <ModalBody>Select your preferred language</ModalBody>
        <ModalBody>选择您喜欢的语言</ModalBody>
        <ModalBody>선호하는 언어를 선택하십시오</ModalBody>
        <ModalBody> 
          <ButtonGroup>
            <Button onClick={() => LanguageSelected('ENG')}>English</Button>
            <Button onClick={() => LanguageSelected('KOR')}>Korean</Button>
            <Button onClick={() => LanguageSelected('CHI')}>Chinese</Button>
          </ButtonGroup>
        </ModalBody>
        <ModalFooter><SocialLinks /></ModalFooter>
      </Modal>

    </div>
  )
}

export default Navigation
