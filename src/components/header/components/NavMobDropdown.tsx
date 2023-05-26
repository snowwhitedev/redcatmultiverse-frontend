import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import ArrowDown from '../../Icons/ArrowDown';
import styles from './NavMobDropdown.module.scss';

const NavMobDropdown = ({ title, items, onClickItem }: any) => {
  const [isLangExpanded, setIsLangExpanded] = useState(false);
  const { getToggleProps, getCollapseProps } = useCollapse({ isExpanded: isLangExpanded });

  return (
    <a className={styles.langMobDropDownContainer}>
      <div
        className={`${styles.langMenuItem}`}
        {...getToggleProps({
          style: { display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: 0, paddingRight: 0 },
          onClick: () => setIsLangExpanded((x) => !x)
        })}
      >
        {title}
        <div className={`${styles.arrowWrapper} ${isLangExpanded ? styles.expanded : ''}`}>
          <ArrowDown />
        </div>
      </div>
      <div className={styles['line-gradient']}></div>
      <div {...getCollapseProps()}>
        {items.map((item: any, idx: any) => {
          return (
            <div key={idx} className={styles.langMobItem} onClick={() => onClickItem(idx)} >
              {item}
              {items.indexOf(item) !== items.length - 1 && <div className={styles['line-gradient']}></div>}
            </div>
          )
        })}
        <div className={styles['line-gradient']}></div>
      </div>
    </a>
  )
}

export default NavMobDropdown;
