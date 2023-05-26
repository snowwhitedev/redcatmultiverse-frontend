import Image from 'next/image';

type LandingImageProps = {
  imageDetails: {
    path: string;
    imageClassName: string;
    width: string;
    height: string;
    altText: string;
  };
};

const LandingImage = ({ imageDetails }: LandingImageProps) => {
  const { path, width, height, altText } = imageDetails;
  return (
    <div className={imageDetails.imageClassName}>
      <Image src={path} width={width} height={height} alt={altText} />
    </div>
  );
};

export default LandingImage;
