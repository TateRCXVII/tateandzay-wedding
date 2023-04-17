// I want three photos to be in one row (or 3 columns)
// render these photos from firebase storage like in the Gallery.tsx component
// components/Gallery.tsx
'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { storage } from '../../../../firebase/index';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import styles from './styles.module.scss';
import Image from 'next/image';

const fetchImageUrls = async () => {
  const storageRef = ref(storage, 'photos');
  const imageUrls: any[] = [];
  const maxImages = 3; // Set the maximum number of images to return

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
  // return 3 photos in one row from the fetchImageUrls function
  const [imageUrls, setImageUrls] = useState<any[]>([]);

  useEffect(() => {
    fetchImageUrls().then((urls) => {
      setImageUrls(urls);
    });
  }, []);

  return (
    <div className={styles['photos']}>
      {imageUrls.map((image, index) => (
        <div className={styles['photo']} key={index}>
          <Image
            src={image.src}
            alt="Photo"
            width={image.width}
            height={image.height}
          />
        </div>
      ))}
    </div>
  )
}

export default PhotosComponent;