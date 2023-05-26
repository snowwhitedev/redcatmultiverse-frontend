/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Container from '../container/Container'
import styles from './header.module.scss'
import connectModalStyles from '../../components/ConnectModal/ConnectModal.module.scss';
import { NavMobile } from './NavMobile';
import { NavDesktop } from './NavDesktop';
import ConnectModal from '../ConnectModal/ConnectModal';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const Header = () => {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const { t } = useTranslation('common');

  const headerLinks = [
    { name: t('header.multiverse'), link: 'multiverse', finished: true },
    { name: 'The Inception', link: 'inceptionnft', finished: true },
    { name: 'Gallery', link: 'gallery', finished: true },
    { name: 'More', link: 'more', finished: true },
    { name: 'Join The Inception', link: 'buyInception', finished: true },
    { name: 'Connect', link: 'connect', finished: true }
  ];

  const headerMoreItems = [
    { name: 'PLE', link: 'play-learn-earn' },
    { name: t('header.community'), link: 'community' },
    { name: t('header.roadmap'), link: 'roadmap' },
    { name: t('header.whitepaper'), link: 'whitepaper' },
    { name: t('header.blog'), link: 'blog' },
  ];

  const handleOpenConnectModal = () => {
    document.body.style.overflowY = 'hidden';
    setIsConnectModalOpen(true);
  }

  const handleCloseConnectModal = () => {
    document.body.style.overflowY = 'auto';
    setIsConnectModalOpen(false);
  }

  return (
    <>
      <AudioPlayer />
      <Container className={styles.headerContainer}>
        <header className={styles.header}>
          <Link href="/">
            <a>
              <img src='/images/rcm-logo-red.svg' alt='RCM Logo' className={styles.headerLogo} />
            </a>
          </Link>
          <NavDesktop links={headerLinks} moreItems={headerMoreItems} onOpenConnectModal={handleOpenConnectModal} />
          <NavMobile links={headerLinks} onOpenConnectModal={handleOpenConnectModal} />
          {/* Connect Modal part */}
          {isConnectModalOpen && (
            <div className={connectModalStyles.modalBackDrop}>
              <div className={connectModalStyles.modalWrapper}>
                <ConnectModal onClose={handleCloseConnectModal} />
              </div>
            </div>
          )}
        </header>
      </Container>
    </>
  )
}

export default Header;
