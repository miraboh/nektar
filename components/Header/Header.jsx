import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import classNames from 'classnames'
import layout from '@/styles/Layout.module.scss'
import style from './Header.module.scss'

function Header() {
  const [toggle, setToggle] = useState(false)
  const { width } = useWindowDimensions()
  const { t } = useTranslation()

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const header = document.getElementById('header')
      window.scrollY >= 80
        ? header.classList.add(style['scroll-header'])
        : header.classList.remove(style['scroll-header'])
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const navMenu = classNames(style.nav__menu)
      if (navMenu) {
        const sectionList = document.querySelectorAll('section[id]')
        sectionList.forEach((section) => {
          const sectionId = section.getAttribute('id')
          const querySelector = `.${navMenu} a[href*='${sectionId}']`
          const menuItem = document.querySelector(querySelector)
          if (menuItem) {
            const scrollY = window.scrollY
            const sectionTop = section.offsetTop - 50
            const activeLinkClass = classNames(style['nav__link--active'])
            if (
              scrollY > sectionTop &&
              scrollY <= sectionTop + section.offsetHeight
            ) {
              menuItem.classList.add(activeLinkClass)
            } else {
              menuItem.classList.remove(activeLinkClass)
            }
          }
        })
      }
    })
  })

  const clickHandler = (e) => {
    if (e.target.tagName === 'A') {
      setToggle(!toggle)
    }
  }

  return (
    <header className={style.header} id='header'>
      <nav className={classNames([style.nav], [layout.container])}>
        <a href='#' className={style.nav__logo} title={t('header.logo')}>
          {t('header.logo')}
        </a>
        <div className={style.nav__toggle} onClick={() => setToggle(!toggle)}>
          <i className='bx bx-grid-alt' />
        </div>
        <a
          href='#app'
          className={classNames([layout.button], {
            [layout.hidden]: width < 960
          })}
          title={t('header.order')}
        >
          {t('header.order')}
        </a>
      </nav>
    </header>
  )
}

export default Header
