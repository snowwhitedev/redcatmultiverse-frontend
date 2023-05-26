import Image from 'next/image'
import styles from './GalleryCard.module.scss';

const GalleryCard = () => {
  return (
    <div className={styles.galleryCard}>
      <div className={styles.catImgContainer} style={{ backgroundColor: '#0f5665' }}>
        <Image
          src='/images/inception/cat1.png'
          alt='Sanura'
          layout='fill'
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.catName}>Description Clue</div>
        <div className={styles.catID}>ID:0000</div>
      </div>
    </div>
  )
}

export default GalleryCard;
