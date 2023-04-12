// components/Gallery.tsx
'use client'
import React, { useEffect, useState } from "react";
import { storage } from "../../../../firebase/index";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { Icon, CircularProgress } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";
import styles from "./styles.module.scss";

const fetchImageUrls = async () => {
  const storageRef = ref(storage, "photos");
  const imageUrls: string[] = [];

  const items = await listAll(storageRef);
  for (const item of items.items) {
    const url = await getDownloadURL(item);
    imageUrls.push(url);
  }

  return imageUrls;
};

const Gallery: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImageUrls().then((urls) => {
      setImageUrls(urls)
      setIsLoading(false)
    });
  }, []);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return (
    <div className={styles.gallery}>
      {isLoading ? (
        <CircularProgress
          variant="indeterminate"
          size={100}
          thickness={4}
          sx={{ color: "#000000" }}
        />
      ) : (
        imageUrls.length > 0 && (
          <>
            <button onClick={prevImage} className={styles["left-arrow"]}>
              <div className={styles["icon-container"]}>
                <Icon component={ArrowBackIos} />
              </div>
            </button>
            <div className={styles["carousel-container"]}>
              <Image
                src={imageUrls[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="rounded shadow-md"
                layout="responsive"
                width={430}
                height={740}
                loading="lazy"
              />
            </div>
            <button onClick={nextImage} className={styles["right-arrow"]}>
              <div className={styles["icon-container"]}>
                <Icon component={ArrowForwardIos} />
              </div>
            </button>
          </>
        )
      )}
    </div>
  );
};

export default Gallery;