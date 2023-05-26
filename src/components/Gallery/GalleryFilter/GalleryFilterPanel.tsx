import { useTheme } from 'next-themes';
import GradientText from '../../gradientText/GradientText';
import GalleryFilter from './GalleryFilter';
import { GALLERY_FILTER_ITEMS } from '../constants';
import styles from "./GalleryFilterPanel.module.scss";

const GalleryFilterPanel = () => {
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div className={styles.galleryPanel}>
      <div className={styles.headerLabel}>
        <GradientText
          element='h5'
          text={`INCEPTION`}
          innerColor={currentTheme === 'dark' ? '#FFF' : '#1b1628'}
          gradient={['#f9c930', '#f2957c', '#7192f3']}
        />
      </div>
      <div className={styles.filterItems}>
        {GALLERY_FILTER_ITEMS.map((item,) => (
          <GalleryFilter key={item.attribute} filterItem={item} />
        ))}
      </div>
    </div>
  )
}

export default GalleryFilterPanel;
