import React, { useEffect, useState, useCallback } from 'react';
import { storage } from '../../../firebase/index';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import styles from './styles.module.scss';
import Image from 'next/image';
import VisibilitySensor from 'react-visibility-sensor';

const fetchImageUrls = async () => {
  const storageRef = ref(storage, 'photos');
  const imageUrls: any[] = [];
  const maxImages = 2; // Set the maximum number of images to return

  const items = await listAll(storageRef);

  // Check if there are more images than the maximum and slice the array accordingly
  const itemsToFetch = items.items.length > maxImages ? items.items.slice(0, maxImages) : items.items;

  for (const item of itemsToFetch) {
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
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      });
    };
  });
}

const PhotosComponent: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<any[]>([]);

  useEffect(() => {
    fetchImageUrls().then((urls) => {
      setImageUrls(urls);
    });
  }, []);

  const onEnterViewport = (index: number) => {
    const photoElement = document.getElementById(`photo-${index}`);
    if (photoElement) {
      photoElement.classList.add(styles['fade-in']);
    }
  };

  const onExitViewport = (index: number) => {
    const photoElement = document.getElementById(`photo-${index}`);
    if (photoElement) {
      photoElement.classList.remove(styles['fade-in']);
    }
  };

  const onVisibilityChange = (index: number, isVisible: boolean) => {
    const photoElement = document.getElementById(`photo-${index}`);
    if (photoElement) {
      if (isVisible) {
        photoElement.classList.add(styles['fade-in']);
      } else {
        photoElement.classList.remove(styles['fade-in']);
      }
    }
  };

  return (
    <div className={styles['photos']}>
      {imageUrls.map((image, index) => (
        <VisibilitySensor
          key={index}
          onChange={(isVisible: boolean) => onVisibilityChange(index, isVisible)}
          partialVisibility
        >
          <Image
            src={image.src}
            alt="Photo"
            width={image.width / 8}
            height={image.height / 8}
            className={styles['photo']} id={`photo-${index}`}
          />
        </VisibilitySensor>
      ))}
    </div>
  );
};

export default PhotosComponent;