import styles from './HorizontalAdvert.module.scss';

type HorizontalAdvertProps = {
  messageText: string;
  buttonText: string;
  buttonColor: string;
  externalLink: string;
};

const HorizontalAdvert = ({
  messageText,
  buttonText,
  buttonColor,
  externalLink
}: HorizontalAdvertProps) => {
  return (
    <div className={styles.HorizontalAdvertSection}>
      <p className={styles.HorizontalAdvertMessage}>{messageText}</p>
      <a href={externalLink} target='_blank' rel="noreferrer">
        <button
          style={{ backgroundColor: buttonColor }}
          className={styles.HorizontalAdvertButton}
        >
          {buttonText}
        </button>
      </a>
    </div>
  );
};

export default HorizontalAdvert;
