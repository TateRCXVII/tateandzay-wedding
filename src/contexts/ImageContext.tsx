import { createContext, useContext } from 'react';

interface ImageData {
  // Define the shape of your image data here, for example:
  url: string;
  alt: string;
}

const ImageContext = createContext<ImageData[]>([]);

export const useImages = () => useContext(ImageContext);

export default ImageContext;
