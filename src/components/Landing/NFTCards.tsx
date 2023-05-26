import { useTranslation } from 'next-i18next';
import ICNFTCardContainer from '../ICNFT/CardContainer/ICNFTCardContainer';
import styles from './NFTCards.module.scss';

const NFTCards = () => {
  const { t } = useTranslation('landing');

  return (
    <div className={styles.NFTCardsSection}>
      <div className={styles.NFTCardsWrapper}>
        <p className={styles.NFTCardsTitle}>{t('nftCards.nftCardsTitle')}</p>
        <p className={styles.NFTCardsMessage}>{t('nftCards.nftCardsMessage.0')}</p>
        <p className={styles.NFTCardsMessage}>{t('nftCards.nftCardsMessage.1')}</p>
        <ICNFTCardContainer containerClassName={styles.NFTCardsContainer} />
      </div>
    </div>
  );
};

export default NFTCards;
