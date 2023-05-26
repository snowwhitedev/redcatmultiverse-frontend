import type { NextPage } from 'next';
import { ParallaxProvider } from 'react-scroll-parallax';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ParallaxHero from '../src/components/Home/ParallaxHero';
import { DevelopBy } from '../src/components/Home/DevelopBy';
import { Conversation } from '../src/components/Home/Conversation';
import { PlayLearnEarn } from '../src/components/Home/PlayLearnEarn';
import styles from '../src/styles/home.module.scss';
import Trailer from '../src/components/Home/components/Trailer';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <div className={styles.parallaxContainer}>
        <ParallaxProvider>
          <ParallaxHero />
        </ParallaxProvider>
        <div className={styles.ctaWrapper}>
          {/*<div className={styles.bigCTASubject}>{t('cta.first')}</div>*/}
          {/* <div className={styles.bigCTASubject}>{t('cta.needHelp')}</div> */}
          <div className={styles.ctaSubject}>
            <i>{t('cta.second')}</i>
          </div>
          <div className={styles.ctaSubject}>
            <i>{t('cta.third')}</i>
             </div> 
          <div className={styles.ctaBtnWrapper}>
            <a className={styles.ctaBtn} href='https://mint.redcatmultiverse.io/'>
              {t('cta.btnLabel')}
              {/* {t('cta.joinToMint')} */}
            </a>
          </div>
        </div>
        <div className={styles.ctaTrailerWrapper}>
          <div className={styles.ctaTrailerTitle}>
            <Trailer />
          </div>
        </div>
      </div>
      <DevelopBy />
      <Conversation />
      <PlayLearnEarn />
    </>
  );
};

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});

export default Home;
