import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import './ProjectGallery.css';

interface ProjectGalleryProps {
    images: string[];
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="project-gallery">
            <div className="gallery-controls">
                <button onClick={handlePrevClick}>
                    <ChevronLeft />
                </button>
                <div className="gallery-image">
                    <div className="gallery-image-container">
                        <img src={images[currentIndex]} alt={`Screenshot ${currentIndex + 1}`} />
                    </div>
                </div>
                <button onClick={handleNextClick}>
                    <ChevronRight />
                </button>
            </div>
            <div className="gallery-thumbnails">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <img src={image} alt={`Thumbnail ${index + 1}`} />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ProjectGallery;