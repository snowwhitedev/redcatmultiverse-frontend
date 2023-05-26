import { useTranslation } from 'next-i18next';
import { teamMembers } from '../CommunityGrid/constants';
import styles from './Team.module.scss';
import TeamCard from './TeamCard';

const Team = () => {
  const { t } = useTranslation('landing');
  const { t: tTeams } = useTranslation('communityPage');

  return (
    <div className={styles.teamWrapper}>
      <div className={styles.teamContent}>
        <p className={styles.teamTitle}>{t('team.title')}</p>
        <p className={styles.teamMessage}>{t('team.description')}</p>
        <div className={styles.cardsContainer}>
          <TeamCard
            imageProps={{ imagePath: teamMembers[0].imageCard, altText: 'alt' }}
            name={`${tTeams('team.members.0.firstName')} ${tTeams('team.members.0.lastName')}`}
            job={tTeams('team.members.0.role')}
            description={tTeams('team.members.0.bio')}
          />
          <TeamCard
            imageProps={{ imagePath: teamMembers[1].imageCard, altText: 'alt' }}
            name={`${tTeams('team.members.1.firstName')} ${tTeams('team.members.1.lastName')}`}
            job={tTeams('team.members.1.role')}
            description={tTeams('team.members.1.bio')}
          />
          <TeamCard
            imageProps={{ imagePath: teamMembers[2].imageCard, altText: 'alt' }}
            name={`${tTeams('team.members.2.firstName')} ${tTeams('team.members.2.lastName')}`}
            job={tTeams('team.members.2.role')}
            description={tTeams('team.members.2.bio')}
          />
          <TeamCard
            imageProps={{ imagePath: teamMembers[3].imageCard, altText: 'alt' }}
            name={`${tTeams('team.members.3.firstName')} ${tTeams('team.members.3.lastName')}`}
            job={tTeams('team.members.3.role')}
            description={tTeams('team.members.3.bio')}
          />
          <TeamCard
            imageProps={{ imagePath: teamMembers[4].imageCard, altText: 'alt' }}
            name={`${tTeams('team.members.4.firstName')} ${tTeams('team.members.4.lastName')}`}
            job={tTeams('team.members.4.role')}
            description={tTeams('team.members.4.bio')}
          />
          <TeamCard
            imageProps={{ imagePath: teamMembers[5].imageCard, altText: 'alt' }}
            name={`${tTeams('team.members.5.firstName')} ${tTeams('team.members.5.lastName')}`}
            job={tTeams('team.members.5.role')}
            description={tTeams('team.members.5.bio')}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
