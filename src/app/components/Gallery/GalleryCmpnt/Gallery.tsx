// components/Gallery.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { storage } from '../../../../firebase/index';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import CircularProgress from '@mui/material/CircularProgress';
import Gallery from 'react-photo-gallery';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './styles.module.scss';

const fetchImageUrls = async () => {
  const storageRef = ref(storage, 'photos');
  const imageUrls: any[] = [];

  const items = await listAll(storageRef);
  for (const item of items.items) {
    const url = await getDownloadURL(item);
    const dimensions = await getImageDimensions(url);
    imageUrls.push({
      src: url,
      width: dimensions.width,
      height: dimensions.height,
    });
  }

  return imageUrls;
};

const getImageDimensions = (
  src: string
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    //creat img without using window
    const img = new Image();
    img.src = src;
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      });
    };
  });
};

const CarouselComponent: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<any[]>([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImageUrls().then((urls) => {
      setImageUrls(urls);
      setIsLoading(false);
    });
  }, []);

  const openLightbox = useCallback(
    (event: React.MouseEvent, { photo, index }: { photo: any; index: number }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    },
    []
  );

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className={styles.page}>
      {isLoading ? (
        <CircularProgress
          variant="indeterminate"
          size={100}
          thickness={4}
          sx={{ color: '#000000' }}
        />
      ) : (
        imageUrls.length > 0 && (
          <>
            {viewerIsOpen && (
              <div className={styles.lightboxWrapper}>
                <div className={styles.lightboxBackground}>
                  <Carousel
                    showThumbs={false}
                    selectedItem={currentImage}
                    showStatus={false}
                    showIndicators={false}
                    useKeyboardArrows
                    infiniteLoop
                  >
                    {imageUrls.map((image, index) => (
                      <div key={index}>
                        <img className={styles.carouselImage} src={image.src} alt={image.title} />
                      </div>
                    ))}
                  </Carousel>
                  <button
                    className={styles.closeButton}
                    onClick={closeLightbox}
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
            <Gallery
              photos={imageUrls}
              onClick={(event, obj) => openLightbox(event, obj)}
            />
          </>
        )
      )}
    </div>
  );
};

export default CarouselComponent;