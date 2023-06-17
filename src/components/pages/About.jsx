import React from 'react'
import AboutsecOne from './about/aboutsecOne'
import AboutsecTwo from "./about/aboutsecTwo"
import AboutsecThree from "./about/aboutsecThree"
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <AboutsecOne />
      <AboutsecTwo/>
      <AboutsecThree/>
    </>
  )
}

export default About