import cx from 'classnames';
import Image from 'next/image';
import styles from './TeamCard.module.scss';

type TeamCardProps = {
  imageProps: {
    imagePath: string;
    altText: string;
    classNames?: string;
  };
  name: string;
  job: string;
  description: string;
};

const TeamCard = ({
  imageProps: { imagePath, altText, classNames },
  name,
  job,
  description,
}: TeamCardProps) => {

  return (
    <div className={styles.cardContainer}>
      <Image
        className={cx(styles.memberPhoto)}
        src={imagePath}
        alt={altText}
        width='450px'
        height='450px'
      />
      <p className={styles.memberName}>{name}</p>
      <p className={styles.memberJob}>{job}</p>
      <p className={styles.memberDescription}>{description}</p>
    </div>
  );
};

export default TeamCard;
