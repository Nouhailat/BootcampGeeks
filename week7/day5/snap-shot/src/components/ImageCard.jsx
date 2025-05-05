export default function ImageCard({ image }) {
    return (
      <div className="image-card">
        <img src={image.src.medium} alt={image.photographer} />
      </div>
    );
  }
  