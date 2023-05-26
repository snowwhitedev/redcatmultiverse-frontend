import { useState } from 'react';
import styles from './FilterCheckBox.module.scss';

const FilterCheckBox = ({ label }: any) => {
  const [checked, setChecked] = useState(false);
  const handleOnChange = () => {
    setChecked(!checked);
  }
  return (
    <label className={styles.container}>
      <input type="checkbox" checked={checked} onChange={handleOnChange} />
      <span className={styles.checkmark}></span>
      <span className={styles.checkboxLabel}>{label}</span>
    </label>
  )
}
export default FilterCheckBox;