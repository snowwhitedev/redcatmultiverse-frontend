import ICNFTRarityCard from '../ICNFTRarityCard';
import styles from '../../../styles/icnft.module.scss';

const rarityData = {
  essential: {
    character: [0, 1],
    playCard: [0, 1],
    inGame: [0, 1],
  },
  rare: {
    character: [0, 1, 2],
    playCard: [0, 1, 2],
    inGame: [0, 1, 2],
  },
  legendary: {
    character: [0, 1, 2, 3],
    playCard: [0, 1, 2],
    inGame: [0, 1, 2, 3],
  },
};

const ICNFTCardContainer = ({
  containerClassName,
}: {
  containerClassName?: string;
}) => {
  return (
    <div className={containerClassName || styles.raritySection}>
      <div className={styles.rarityCardWrapper}>
        <ICNFTRarityCard className='essential' data={rarityData.essential} />
      </div>
      <div className={styles.rarityCardWrapper}>
        <ICNFTRarityCard className='rare' data={rarityData.rare} />
      </div>
      <div className={styles.rarityCardWrapper}>
        <ICNFTRarityCard className='legendary' data={rarityData.legendary} />
      </div>
    </div>
  );
};

export default ICNFTCardContainer;
