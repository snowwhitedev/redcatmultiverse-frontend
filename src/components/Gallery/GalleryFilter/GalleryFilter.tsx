import { useState } from 'react';
import useCollapse from 'react-collapsed';
import IconMinus from '../../Icons/IconMinus/IconMinus';
import IconPlus from '../../Icons/IconPlus/IconPlus';
import styles from "./GalleryFilter.module.scss";
import GalleryIconBack from '../Icons/GalleryIconBack';
import GalleryIconFur from '../Icons/GalleryIconFur';
import GalleryIconEyes from '../Icons/GalleryIconEyes';
import GalleryIconMouth from '../Icons/GalleryIconMouth';
import GalleryIconFlair from '../Icons/GalleryIconFlair';
import GalleryIconHat from '../Icons/GalleryIconHat';
import GalleryIconObject from '../Icons/GalleryIconObject';
import { ATTRIBUTE_BACKGROUND, ATTRIBUTE_EYES, ATTRIBUTE_FLAIR, ATTRIBUTE_FUR, ATTRIBUTE_HAT, ATTRIBUTE_MOUTH, ATTRIBUTE_OBJECTS } from '../constants';
import FilterCheckBox from './FilterCheckBox';

const GalleryFilter = ({ filterItem }: any) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getToggleProps, getCollapseProps } = useCollapse({ isExpanded })

  const getAttributeIcon = (attr: any) => {
    switch (attr) {
      case ATTRIBUTE_BACKGROUND:
        return (<GalleryIconBack />);
      case ATTRIBUTE_FUR:
        return (<GalleryIconFur />);
      case ATTRIBUTE_EYES:
        return (<GalleryIconEyes />);
      case ATTRIBUTE_MOUTH:
        return (<GalleryIconMouth />);
      case ATTRIBUTE_FLAIR:
        return (<GalleryIconFlair />);
      case ATTRIBUTE_HAT:
        return (<GalleryIconHat />);
      case ATTRIBUTE_OBJECTS:
        return (<GalleryIconObject />);
      default:
        break;
    }
  }

  return (
    <div className={styles.galleryFilter}>
      <div className={styles.collapseBtn} {...getToggleProps({
        onClick: () => setExpanded((x) => !x)
      })}>
        <div className={styles.filterLabel}>
          {getAttributeIcon(filterItem.attribute)}
          <span>{filterItem.attribute}</span>
        </div>
        {isExpanded ? <IconMinus className='small' /> : <IconPlus className='small' />}
      </div>
      <div className={styles.filterItems} {...getCollapseProps()}>
        {filterItem.values.map((value: any,) => (
          <div key={value} className={styles.checkboxContainer}>
            <FilterCheckBox label={value} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default GalleryFilter;
