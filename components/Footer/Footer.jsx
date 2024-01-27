import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import style from './Footer.module.scss'
import layout from '@/styles/Layout.module.scss'

function Footer() {
  const { t } = useTranslation()
  return (
    <footer
      id='footer'
      className={classNames([style.footer], [layout.section])}>
      <div
        className={classNames(
          [style.footer__container],
          [layout.container],
          [layout.grid]
        )}
      >
      
        <div className={style.footer__content}>
          <ul className={style.footer__links}>
            <li>
              <a
                href='https://nektar.agency/'
                title={t('footer.terms')}
                className={style.footer__link}
              >
                {t('footer.terms')}
              </a>
            </li>
          </ul>
        </div>
        <div className={style.footer__social}>
          <a
            href={t('footer.social.facebook.link')}
            target='_blank'
            rel='noreferrer'
            title={t('footer.social.facebook.title')}
            className={style['footer__social-link']}
          >
            <i className='bx bxl-facebook-circle' />
          </a>
          <a
            href={t('footer.social.twitter.link')}
            target='_blank'
            rel='noreferrer'
            title={t('footer.social.twitter.title')}
            className={style['footer__social-link']}
          >
            <i className='bx bxl-twitter' />
          </a>
          <a
            href={t('footer.social.instagram.link')}
            target='_blank'
            rel='noreferrer'
            title={t('footer.social.instagram.title')}
            className={style['footer__social-link']}
          >
            <i className='bx bxl-instagram-alt' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
