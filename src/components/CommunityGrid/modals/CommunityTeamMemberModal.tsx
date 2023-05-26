import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { IMAGE_BLUR_DATA_URL_PINK } from '../../../utilities/constants';
import EmojiIcon from '../../Icons/EmojiIcon/EmojiIcon';
import LinkedinIcon from '../../Icons/LinkedinIcon/LinkedinIcon';
import styles from './CommunityTeamMemberModal.module.scss';

const CommunityTeamMemberModal = ({ info, onClose }: any) => {
  const { t } = useTranslation('communityPage');

  const {
    image,
    firstName,
    lastName,
    role,
    social,
    noLinkedin,
    bio
  } = info;

  return (<div className={styles.teamMemberModal}>
    <div className={styles.teamDescription}>
      <div>{t('team.description_1')}</div>
    </div>
    <div className={styles.memberImg}>
      <Image
        src={image}
        alt="TeamMember"
        layout='fill'
        placeholder='blur'
        blurDataURL={IMAGE_BLUR_DATA_URL_PINK}
        objectFit='contain'
      />
    </div>

    <div className={styles.memberInfo}>
      <div className={styles.fullName}>{`${firstName} ${lastName}`}</div>
      <div className={styles.subInfo}>
        <a href={social} target='_blank' rel="noreferrer">
          {noLinkedin ? <EmojiIcon /> : <LinkedinIcon />}
        </a>
        <div className={styles.role}>{role}</div>
      </div>
      <div className={styles.bio}>{bio}</div>
    </div>
    <button className={styles.closeBtn} onClick={onClose} >{t('team.close')}</button>
  </div>);
}

export default CommunityTeamMemberModal;