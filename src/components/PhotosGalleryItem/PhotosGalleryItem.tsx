import type { Photo } from "../../types/photo";
import type { MouseEvent } from "react";

import styles from "./PhotosGalleryItem.module.css";

interface PhotosGalleryItemProps {
  photo: Photo;
  onPhotoClick: (photo: Photo) => void;
}

export default function PhotosGalleryItem({ photo, onPhotoClick }: PhotosGalleryItemProps) {
  const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    onPhotoClick(photo);
  };

  return (
      <div
        onClick={handleClick}
        className={styles.thumb}
        style={{
          backgroundColor: photo.avg_color,
          borderColor: photo.avg_color,
        }}
      >
        <img src={photo.src.large} alt={photo.alt} />
      </div>
  );
}
