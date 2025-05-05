import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from '../components/ImageCard';

export default function Category() {
  const { query } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`https://api.pexels.com/v1/search?query=${type}&per_page=30`, {
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_API_KEY,
      },
    }).then((res) => setImages(res.data.photos));
  }, [query]);

  return (
    <div>
      <h2>{type.toUpperCase()} Gallery</h2>
      <div className="gallery">
        {images.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </div>
  );
}
