import { useTranslation } from 'next-i18next';
import HorizontalAdvert from './HorizontalAdvert';

const Connect = () => {
  const { t } = useTranslation('landing');

  return (
    <HorizontalAdvert
      messageText={t('connect.withUs')}
      buttonText={t('connect.join')}
      buttonColor={'#e83324'}
      externalLink='https://twitter.com/TheRedCats'
    />
  );
};

export default Connect;
