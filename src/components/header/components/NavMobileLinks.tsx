import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { langItems } from './constants';
import styles from '../header.module.scss';
import LangMobDropdown from './LangMobDropdown';
import MoreItemsMob from './MoreItemsMob';

export const NavMobileLinks = ({ links, onOpenConnectModal, onCloseNav }: any) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { t } = useTranslation('common');

  const moreItems = ['PLE', t('header.community'), t('header.roadmap'), t('header.whitepaper'), t('header.blog')];
  const moreItemLinkss = ['play-learn-earn', 'community', 'roadmap', 'whitepaper', 'blog'];

  const handleConnectClick = () => {
    onOpenConnectModal()
  }

  const handleLinkClick = (link: any) => {
    router.push(link);

    onCloseNav();
  }

  const handleClickMoreItem = (idx: any) => {
    if (idx === 3) { // whitepaper
      window.open('https://whitepaper.redcatmultiverse.io/', '__blank');
    } else if (idx === 4) {
      window.open('https://blog.redcatmultiverse.io/', '__blank');
    } else {
      router.push(moreItemLinkss[idx]);
    }

    onCloseNav();
  }

  const handleClickLangItem = (idx: any) => {
    router.push({ pathname, query }, asPath, { locale: langItems[idx] });

    onCloseNav();
  }

  return (
    <div className={styles['container-options-links']}>
      {
        links.map((link: any, index: any) => {
          if (link.link === 'more') {
            return (<MoreItemsMob key={index} items={moreItems} onSelect={handleClickMoreItem} />)
          }
          if (link.link === 'whitepaper') {
            return (
              <a className={styles.option} key={index} href='https://whitepaper.redcatmultiverse.io/' target='_blank' rel="noreferrer">
                {link.name}
                <div className={styles['line-gradient']}></div>
                {link.finished === false && (<span className={styles.soonBadge}>soon</span>)}
              </a>
            )
          }
          if (link.link === 'buyInception') {
            return (
              <a className={styles.option} key={index} href='https://mint.redcatmultiverse.io/' target='_blank' rel="noreferrer">
                {link.name}
                <div className={styles['line-gradient']}></div>
              </a>
            )
          }
          if (link.link === 'connect') {
            return (
              <a className={styles.option} key={index} target='_blank' rel="noreferrer" onClick={handleConnectClick}>
                {link.name}
                <div className={styles['line-gradient']}></div>
              </a>
            )
          }
          if (link.finished == false) {
            return (
              <a className={styles.option} key={index} rel="noreferrer">
                {link.name}
                <div className={styles['line-gradient']}></div>
                {link.finished === false && (<span className={styles.soonBadge}>soon</span>)}
              </a>
            )
          }
          return (
            <a className={styles.option} key={index} onClick={() => handleLinkClick(link.link.toLowerCase())}>
              {link.name}
              <div className={styles['line-gradient']}></div>
            </a>
          )
        })
      }
      <LangMobDropdown onSelectLang={handleClickLangItem} />
    </div>
  )
}
