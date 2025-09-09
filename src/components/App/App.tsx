import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import getPhotos from "../../services/photos";
import toast, { Toaster } from "react-hot-toast";
import type { Photo } from "../../types/photo";
import { useState } from "react";
import PhotosGallery from "../PhotosGallery/PhotosGallery";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isloading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);


  const handleSearch = async (search: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setPhotos([]);

      const data = await getPhotos(search);
      
      if (data.photos.length === 0) {
        toast.error("No photos found for this search term");
      }
      setPhotos(data.photos);

    } catch {
      setIsError(true);
    }
    finally {
      setIsLoading(false);
    };
  }

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  }
    

  return (
    <>
      <Section>
        <Container>
          <Toaster />
          <Form onSubmit={handleSearch} />
          <PhotosGallery onPhotoClick={openModal} photos={photos}/>
        </Container>
        Home page
      </Section>
    </>
  );
}
