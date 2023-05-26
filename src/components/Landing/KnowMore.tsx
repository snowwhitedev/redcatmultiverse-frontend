import { useTranslation } from 'next-i18next';
import HorizontalAdvert from './HorizontalAdvert';

const KnowMore = () => {
  const { t } = useTranslation('landing');

  return (
    <HorizontalAdvert
      messageText={t('knowMore.knowMore')}
      buttonText={t('knowMore.whitepaper')}
      buttonColor={'#e83324'}
      externalLink='https://whitepaper.redcatmultiverse.io/'
    />
  );
};

export default KnowMore;
