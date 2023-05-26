import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ICNFTMintingDetail from '../src/components/ICNFT/ICNFTMintingDetail';
import ICNFTSlide from '../src/components/ICNFT/TopSlide/ICNFTSlide';
import AboutRCM from '../src/components/Landing/AboutRCM';
import CollectionAdvert from '../src/components/Landing/CollectionAdvert';
import Community from '../src/components/Landing/Community';
import Connect from '../src/components/Landing/Connect';
import KnowMore from '../src/components/Landing/KnowMore';
import Members from '../src/components/Landing/Members';
import NFTCards from '../src/components/Landing/NFTCards';
import Roadmap from '../src/components/Landing/Roadmap';
import Team from '../src/components/Landing/Team';
import styles from '../src/styles/landing.module.scss';

const Landing: NextPage = () => {
  const { t } = useTranslation('icnft');

  return (
    <div className={styles.icNFTContainer}>
      <ICNFTSlide showButton={false} />
      <CollectionAdvert showIcons={false} />
      <AboutRCM />
      <KnowMore />
      <NFTCards />
      <div className={styles.icNFTMintingDetailWrapper}>
        <ICNFTMintingDetail />
      </div>
      <Roadmap />
      <Connect />
      <Team />
      <Community />
      <Members />
      <CollectionAdvert
        imageDetails={{
          path: '/images/Landing/cat_landing_2.png',
          imageClassName: styles.advertImage,
          width: '324px',
          height: '191px',
          altText: 'cat',
        }}
        showIcons={true}
      />
    </div>
  );
};

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'landing', 'icnft', 'roadmapPage', 'communityPage'])),
  },
});

export default Landing;
