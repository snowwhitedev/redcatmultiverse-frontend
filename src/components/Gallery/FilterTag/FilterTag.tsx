import styles from './FilterTag.module.scss';
import CloseIcon from "../../Icons/CloseIcon";

const FilterTag = () => {
  return (
    <div className={styles.filterTag}>
      <span>background: Binary code</span>
      <div className={styles.closeIconBtn}>
        <CloseIcon width='12px' height='12px' fill='#e83324' />
      </div>
    </div>
  )
}

export default FilterTag;
