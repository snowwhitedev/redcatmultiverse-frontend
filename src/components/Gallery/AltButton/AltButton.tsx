import styles from './AltButton.module.scss';
import { useState } from 'react';

const AltButton = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const handleAltButton = (idx: any) => {
    setActiveBtn(idx);
  }

  return (
    <div className={styles.altBtnContainer}>
      <button
        className={`${styles.altBtn} ${activeBtn === 1 ? styles.active : ''}`}
        onClick={() => handleAltButton(1)}
      >
        INCEPTION
      </button>
      <button
        className={`${styles.altBtn} ${activeBtn === 2 ? styles.active : ''}`}
        onClick={() => handleAltButton(2)}
      >
        ALPHA
      </button>
    </div>
  )
};

export default AltButton;
