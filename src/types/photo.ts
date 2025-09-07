export interface Photo {
  id: number;
  avg_color: string;
  alt: string;
  src: {
    original: string;
    large: string;
  };
}

export interface PhotosResponse {
    photos: Photo[];
    page: number;
    per_page: number;
    total_results: string;
    next_page: string;
}