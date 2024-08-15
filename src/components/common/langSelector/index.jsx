import React, { memo, useEffect, useRef, useState } from 'react'
import { AmericaFlag, ButtonIcon, RussianFlag, TopIcon, UzbFlag } from '../../svgs'
import { langData } from '../../../utilities/data'
import {useTranslation} from 'react-i18next'

function LangSelector() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLang') || 'Eng')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropRef = useRef(null)
    const {i18n} = useTranslation()
    
    const handleLanguageSelect = (language) => {
        const { lang } = language
        setSelectedLanguage(language.lang)
        localStorage.setItem('selectedLang', lang)
        setIsDropdownOpen(false)
        // You can add additional logic here, such as updating the language in your app based on the selection
    }

    useEffect(() => {
        const storedLang = localStorage.getItem('selectedLang')
        if (storedLang) {
            setSelectedLanguage(storedLang)
        }
    }, [])

    useEffect(() => {
        function handleClick(event) {
            if (dropRef.current && !dropRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };
    
    return (
        <div className="flex flex-col relative cursor-pointer items-center justify-center gap-[32px]"
            ref={dropRef}>
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className='h-auto p-[0.625rem] flex items-center justify-center gap-[0.625rem] border border-white rounded-[8px] bg-langWhite' >
                {selectedLanguage === 'Rus' && <RussianFlag />}
                {selectedLanguage === 'Uzb' && <UzbFlag />}
                {selectedLanguage === 'Eng' && <AmericaFlag />}

                <span className='text-[1.125rem] text-btnBlue'>{selectedLanguage}</span>
                {isDropdownOpen ? (<TopIcon />) : (<ButtonIcon />)}
            </div>
            {isDropdownOpen && (
                <div className="flex flex-col items-center h-auto absolute translate-y-[70px] bg-langWhite rounded-[10px] transition-all duration-200 w-[6.75rem] py-[0.625rem] gap-[0.625rem] border border-white rounded-[8px bg-langWhite]">
                    {langData.map((item) => {
                        if (item.lang === selectedLanguage) {
                            return null
                        }
                        return (
                            <div onClick={() => {handleLanguageSelect(item); changeLanguage(item.clickLang)}} key={item.id} className="flex items-center justify-center cursor-pointer gap-[20px] w-[100%] h-[100%]">
                                <span className='text-[1.125rem] text-btnBlue'>
                                    {item.lang}
                                </span>
                                <item.flag />
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default memo(LangSelector)

