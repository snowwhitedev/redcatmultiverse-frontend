import { useTranslation } from 'next-i18next';
import styles from './CollectionAdvert.module.scss';
import LandingImage from './LandingImage';

type CollectionAdvertProps = {
  showIcons: boolean;
  imageDetails?: {
    path: string;
    imageClassName: string;
    width: string;
    height: string;
    altText: string;
  };
};

const CollectionAdvert = ({
  imageDetails,
  showIcons = false,
}: CollectionAdvertProps) => {
  const { t } = useTranslation('landing');

  return (
    <div className={styles.collectionAdvertSection}>
      {imageDetails && (
        <LandingImage
          imageDetails={{
            path: imageDetails.path,
            width: imageDetails.width,
            height: imageDetails.height,
            altText: imageDetails.altText,
            imageClassName: imageDetails.imageClassName,
          }}
        />
      )}
      <p className={styles.collectionAdvertTitle}>
        {t('collectionAdvert.applyRCMFellowshipTitle')}
      </p>
      <a href='https://redcatmultiverse.co/' target='_blank' rel="noreferrer">
        <button className={styles.applyButton}>{t('collectionAdvert.applyHere')}</button>
      </a>
      {showIcons && (
        <div className={styles.collectionAdvertIcons}>
          <a href='https://discord.gg/redcatmultiverse' target='_blank' rel="noreferrer">
            <LandingImage
              imageDetails={{
                path: '/images/Landing/discord-icon.png',
                width: '50px',
                height: '50px',
                altText: 'discord',
                imageClassName: styles.collectionAdvertIcon,
              }}
            />
          </a>
          <a href='https://www.youtube.com/@rcmlabs' target='_blank' rel="noreferrer">
            <LandingImage
              imageDetails={{
                path: '/images/youtube-icon_revert.svg',
                width: '50px',
                height: '50px',
                altText: 'youtube',
                imageClassName: styles.collectionAdvertIcon,
              }}
            />
          </a>
          <a href='https://twitter.com/TheRedCats' target='_blank' rel="noreferrer">
            <LandingImage
              imageDetails={{
                path: '/images/Landing/twitter-icon.png',
                width: '50px',
                height: '50px',
                altText: 'twitter',
                imageClassName: styles.collectionAdvertIcon,
              }}
            />
          </a>
          <a href='https://www.instagram.com/redcatmultiverse/' target='_blank' rel="noreferrer">
            <LandingImage
              imageDetails={{
                path: '/images/Landing/ig-icon.png',
                width: '50px',
                height: '50px',
                altText: 'instagram',
                imageClassName: styles.collectionAdvertIcon,
              }}
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default CollectionAdvert;
