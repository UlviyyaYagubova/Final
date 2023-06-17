import React from 'react'
import { useTranslation } from 'react-i18next'
import "../common/i18"
const Lang = () => {
    const { i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }
    return (
        <div>
            <button className='lang' onClick={() => handleClick('en')}>Eng </button>
            <span>/</span>
            <button className='lang' onClick={() => handleClick('az')}>Aze</button>
        </div>
    )
}
export default Lang