import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import layout from '@/styles/Layout.module.scss'
import style from './Intro.module.scss'

function Intro() {
  const { t } = useTranslation()

  return (
    <section
      className={classNames(
        [style.services],
        [layout.section],
        [layout.container]
      )}
      id='services'
    >
      <h2 className={[layout.section__title]}>{t('main.services.title')}</h2>
      <h2 className={[layout.home__description]}>{t('main.services.subtitle')}</h2>
      <p className={[style.home__description]}>{t('main.services.description')}
          </p>
         
    </section>
  )
}

export default Intro
