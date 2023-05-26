import { useTranslation } from 'next-i18next';
import HorizontalAdvert from './HorizontalAdvert';

const Community = () => {
  const { t } = useTranslation('landing');

  return (
    <HorizontalAdvert
      messageText={t('community.alwaysCommunityFirst')}
      buttonText={t('community.comeJoinUs')}
      buttonColor={'#7192f3'}
      externalLink='https://discord.gg/redcatmultiverse'
    />
  );
};

export default Community;
