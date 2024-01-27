import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import layout from '@/styles/Layout.module.scss'
import style from './Home.module.scss'

function Home() {
  const { t } = useTranslation()

  return (
    <section className={classNames([style.home], [layout.section])} id='home'>
      
      {/* vitrine */}
      <div
        className={classNames(
          [style.home__container],
          [layout.container],
          [layout.grid]
        )}
      >
      
        
        <img
          src='/images/web1.png'
          alt="Web Illustration"
          className={classNames(
            [layout.svg__color],
            [style.home__img]
          )}
        />

        {/* </img>
        <HomeImg
          className={classNames(
            [layout.svg__img],
            [layout.svg__color],
            [style.home__img]
          )}
        /> */}
        <div className={[style.home__data]}>
          <h5 className={[style.home__title]}>{t('main.vitrine.title')}</h5>
          <p className={[style.home__description]}>
            {t('main.vitrine.description')}
          </p>
          <a href='#app' className={[layout.button]}>
            {t('main.vitrine.getStarted')}
          </a>
        </div>

      </div>



      {/* Création */}

      <div
        className={classNames(
          [style.home__container],
          [layout.container],
          [layout.grid]
        )}
      >
        <img
          src='/images/cms1.png'
          alt="Web Illustration"
          className={classNames(
            [layout.svg__color],
            [style.home__img]
          )}
        />
        <div className={[style.home__data]}>
          <h5 className={[style.home__title]}>{t('main.Création.title')}</h5>
          <p className={[style.home__description]}>
            {t('main.Création.description')}
          </p>
          <a href='#app' className={[layout.button]}>
            {t('main.Création.getStarted')}
          </a>
        </div>

      </div>

      {/* application */}

      <div
        className={classNames(
          [style.home__container],
          [layout.container],
          [layout.grid]
        )}
      >
       <img
          src='/images/app1.png'
          alt="Web Illustration"
          className={classNames(
            [layout.svg__color],
            [style.home__img]
          )}
        />
        <div className={[style.home__data]}>
          <h5 className={[style.home__title]}>{t('main.application.title')}</h5>
          <p className={[style.home__description]}>
            {t('main.application.description')}
          </p>
          <a href='#app' className={[layout.button]}>
            {t('main.application.getStarted')}
          </a>
        </div>

      </div>

      {/* Formation */}

      <div
        className={classNames(
          [style.home__container],
          [layout.container],
          [layout.grid]
        )}
      >
      <img
          src='/images/training1.png'
          alt="Web Illustration"
          className={classNames(
            [layout.svg__color],
            [style.home__img]
          )}
        />
        <div className={[style.home__data]}>
          <h5 className={[style.home__title]}>{t('main.Formation.title')}</h5>
          <p className={[style.home__description]}>
            {t('main.Formation.description')}
          </p>
          <a href='#app' className={[layout.button]}>
            {t('main.Formation.getStarted')}
          </a>
        </div>

      </div>
    </section>
  )
}

export default Home
