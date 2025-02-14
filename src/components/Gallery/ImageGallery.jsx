import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = () => {
  return (
    <div>
      <ul class="gallery">
        <ImageGalleryItem searchResult="searchRes" />
      </ul>
    </div>
  );
};
