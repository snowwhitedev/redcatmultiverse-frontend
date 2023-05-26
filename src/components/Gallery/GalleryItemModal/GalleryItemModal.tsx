import { Tooltip } from 'react-tooltip';
import IconKey from '../../Icons/IconKey/IconKey';
import IconOpenSea from '../../Icons/IconOpenSea/IconOpenSea';
import GalleryIconBack from '../Icons/GalleryIconBack';
import GalleryIconEyes from '../Icons/GalleryIconEyes';
import GalleryIconFlair from '../Icons/GalleryIconFlair';
import GalleryIconFur from '../Icons/GalleryIconFur';
import GalleryIconHat from '../Icons/GalleryIconHat';
import GalleryIconMouth from '../Icons/GalleryIconMouth';
import GalleryIconObject from '../Icons/GalleryIconObject';
import styles from './GalleryItemModal.module.scss';
import 'react-tooltip/dist/react-tooltip.css';

const GalleryItemModal = () => {
  return (
    <div className={`${styles.modalContainer} ${styles.dark}`} style={{ background: '#0f5665' }}>
      <div className={styles.imgSection}>
        <img src='/images/inception/cat1.png' />
      </div>
      <div className={styles.propertySection}>
        <div className={styles.propertyContainer}>
          <div className={`${styles.contentBox} ${styles.fullBox}`}>
            <p className={styles.itemTitle}>RCM INCEPTION - <span className={styles.itemId}>{`ID 0000`}</span></p>
          </div>
          <div className={styles.properties}>
            <div
              id='modal-attribute-background'
              data-tooltip-html='<div><p>RED WAVING</p><p>Text here</p></div>'
              className={`${styles.contentBox} ${styles.smallBox} ${styles.propertyBox}`}
            >
              <GalleryIconBack color='#fff' />
              <div className={styles.propertyText}>
                <div className={styles.propertyLabel}>Background:</div>
                <div className={styles.propertyValue}>Binary code</div>
              </div>
              <Tooltip anchorId='modal-attribute-background' className={styles.attributeTooltip} classNameArrow={styles.attributeTooltipArrow} />
            </div>
            <div
              id='modal-attribute-eyes'
              data-tooltip-html='<div><p>RED WAVING</p><p>Text here eyes</p></div>'
              className={`${styles.contentBox} ${styles.smallBox} ${styles.propertyBox}`}
            >
              <GalleryIconEyes color='#fff' />
              <div className={styles.propertyText}>
                <div className={styles.propertyLabel}>Eyes:</div>
                <div className={styles.propertyValue}>Pixel Shades</div>
              </div>
              <Tooltip
                anchorId='modal-attribute-eyes'
                className={`${styles.attributeTooltip} ${styles.right}`}
                classNameArrow={`${styles.attributeTooltipArrow} ${styles.right}`}
              />
            </div>
            <div
              id='modal-attribute-flair'
              data-tooltip-html='<div><p>RED WAVING</p><p>Text here</p></div>'
              className={`${styles.contentBox} ${styles.smallBox} ${styles.propertyBox}`}
            >
              <GalleryIconFlair color='#fff' />
              <div className={styles.propertyText}>
                <div className={styles.propertyLabel}>Flair:</div>
                <div className={styles.propertyValue}>Earrings</div>
              </div>
              <Tooltip anchorId='modal-attribute-flair' className={styles.attributeTooltip} classNameArrow={styles.attributeTooltipArrow} />
            </div>
            <div
              id='modal-attribute-mouth'
              data-tooltip-html='<div><p>RED WAVING</p><p>Text here</p></div>'
              className={`${styles.contentBox} ${styles.smallBox} ${styles.propertyBox}`}
            >
              <GalleryIconMouth color='#fff' />
              <div className={styles.propertyText}>
                <div className={styles.propertyLabel}>Mouth:</div>
                <div className={styles.propertyValue}>Shocked</div>
              </div>
              <Tooltip
                anchorId='modal-attribute-mouth'
                className={`${styles.attributeTooltip} ${styles.right}`}
                classNameArrow={`${styles.attributeTooltipArrow} ${styles.right}`}
              />
            </div>
            <div
              id='modal-attribute-objects'
              data-tooltip-html='<div><p>RED WAVING</p><p>Text here</p></div>'
              className={`${styles.contentBox} ${styles.smallBox} ${styles.propertyBox}`}
            >
              <GalleryIconObject color='#fff' />
              <div className={styles.propertyText}>
                <div className={styles.propertyLabel}>Objects:</div>
                <div className={styles.propertyValue}>None</div>
              </div>
              <Tooltip anchorId='modal-attribute-objects' className={styles.attributeTooltip} classNameArrow={styles.attributeTooltipArrow} />
            </div>
            <div
              id='modal-attribute-hat'
              data-tooltip-html='<div><p>RED WAVING</p><p>Text here</p></div>'
              className={`${styles.contentBox} ${styles.smallBox} ${styles.propertyBox}`}
            >
              <GalleryIconHat color='#fff' />
              <div className={styles.propertyText}>
                <div className={styles.propertyLabel}>Hat:</div>
                <div className={styles.propertyValue}>Beanie</div>
              </div>
              <Tooltip
                anchorId='modal-attribute-hat'
                className={`${styles.attributeTooltip} ${styles.right}`}
                classNameArrow={`${styles.attributeTooltipArrow} ${styles.right}`}
              />
            </div>
            <div
              id='modal-attribute-fur'
              data-tooltip-html='<div><p>RED WAVING</p><p>Text here</p></div>'
              className={`${styles.contentBox} ${styles.smallBox} ${styles.propertyBox}`}
            >
              <GalleryIconFur color='#fff' />
              <div className={styles.propertyText}>
                <div className={styles.propertyLabel}>Fur:</div>
                <div className={styles.propertyValue}>Black Standing</div>
              </div>
              <Tooltip anchorId='modal-attribute-fur' className={styles.attributeTooltip} classNameArrow={styles.attributeTooltipArrow} />
            </div>
          </div>
        </div>
        <div className={`${styles.contentBox} ${styles.fullBox} ${styles.collector}`}>
          <div className={styles.collectorLeft}>
            <IconKey />
            <div className={styles.collectorText}>
              <div className={styles.collectorLabel}>Collector:</div>
              <div className={styles.collectorAddress}>0xcfb148fab5455755c1e032cbcd3803423422d92e</div>
            </div>
          </div>
          <IconOpenSea />
        </div>
      </div>
    </div>
  );
}

export default GalleryItemModal;
