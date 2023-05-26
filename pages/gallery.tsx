import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Container from '../src/components/container/Container'
import GradientText from '../src/components/gradientText/GradientText'
import styles from '../src/styles/gallery.module.scss'
import AltButton from '../src/components/Gallery/AltButton/AltButton';
import GalleryCard from '../src/components/Gallery/GalleryCard/GalleryCard';
import GalleryFilterPanel from '../src/components/Gallery/GalleryFilter/GalleryFilterPanel';
import FilterTag from '../src/components/Gallery/FilterTag/FilterTag';
import GalleryItemModal from '../src/components/Gallery/GalleryItemModal/GalleryItemModal';

// import * as Web3 from 'web3';
// import { OpenSeaSDK, Network } from 'opensea-js';


const Gallery: NextPage = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const { theme, systemTheme } = useTheme()
	const currentTheme = theme === "system" ? systemTheme : theme

	const galleryItems = [1, 2, 3, 4, 5, 6];

	// useEffect(() => {
	// 	const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')
	// 	const openseaSDK = new OpenSeaSDK(provider, {
	// 		networkName: Network.Main,
	// 		apiKey: 'myKey'
	// 	})

	// 	openseaSDK.api.getAssets({
	// 		to
	// 	}) .getAsset({
	// 		tokenAddress: '0x12345',
	// 		tokenId: '1',
	// 		t
	// 	})
	// }, []);

	const handleOnClickItem = () => {
		setIsModalOpen(true);
		document.body.style.overflowY = 'hidden';
	}

	const handleOnCloseModal = () => {
		setIsModalOpen(false);
		document.body.style.overflowY = 'auto';
	}

	return (
		<Container className={styles.container}>
			<div className={styles.galleryHeader}>
				<AltButton />
			</div>
			<div className={styles.galleryContainer}>
				<div className={styles.filterContainer}>
					<GalleryFilterPanel />
				</div>
				<div className={styles.galleryContent}>
					<div className={styles.filterTagsContainer}>
						<label>Filters</label>
						<div className={styles.filterTags}>
							<div className={styles.filterTag}><FilterTag /></div>
							<div className={styles.filterTag}><FilterTag /></div>
						</div>
					</div>
					<div className={styles.galleryItems}>
						{galleryItems.map((val: any) => (
							<div key={val} className={styles.galleryCardContainer} onClick={handleOnClickItem}>
								<GalleryCard />
							</div>
						))}

					</div>

				</div>
			</div>
			{isModalOpen === true && (
				<>
					<div className={styles.modalBackDrop} onClick={handleOnCloseModal}></div>
					<GalleryItemModal />
				</>
			)
			}
		</Container>
	)
}

export const getServerSideProps = async ({ locale }: any) => ({
	props: {
		...await serverSideTranslations(locale, ['common'])
	}
});

export default Gallery
