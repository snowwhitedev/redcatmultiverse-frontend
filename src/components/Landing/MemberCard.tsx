import { useTranslation } from 'next-i18next';
import styles from './MemberCard.module.scss';

type MemberCardProps = {
  name: string;
  color: string;
};

const MemberCard = ({ name, color }: MemberCardProps) => {
  const descriptionsUpper = [0, 1, 2, 3];
  const descriptionsLower = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const { t } = useTranslation('landing');

  return (
    <div
      style={{ border: `solid 2px ${color}` }}
      className={styles.memberContainer}
    >
      {descriptionsUpper.map((du: any, idx: any) => (
        <p className={styles.memberMessage} key={idx}>

          {t(`blog.description_1.${du}`)}
        </p>
      ))}
      <img className={styles.blogImg} src="/images/Landing/bear_blog.png" />
      {descriptionsLower.map((du: any, idx: any) => (
        <p className={styles.memberMessage} key={idx}>
          {t(`blog.description_2.${du}`)}
        </p>
      ))}
      {/* <p style={{ color }} className={styles.memberName}>{`- ${name}`}</p>
      <button className={styles.memberButton}>View comment</button> */}
    </div>
  );
};

export default MemberCard;
