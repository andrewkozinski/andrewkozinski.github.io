import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import './ProjectGallery.css';

interface ProjectGalleryProps {
    images: string[];
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
    //state variables
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    //prevClick and nextClick functions to change the currently displayed image in the gallery
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    //Open and close modal functions
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    {/*Handle left or right arrow key presses. These will change the currently displayed image in the gallery*/}
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                handlePrevClick();
            } else if (event.key === 'ArrowRight') {
                handleNextClick();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [images]);


    return (
        <div className="project-gallery">
            <div className="gallery-controls">
                <button onClick={handlePrevClick}>
                    <ChevronLeft />
                </button>
                <div className="gallery-image">
                    <div className="gallery-image-container" onClick={openModal}>
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

            {/*Open the image on click*/}
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>
                            &times;
                        </button>
                        <img src={images[currentIndex]} alt={`Full Screenshot ${currentIndex + 1}`} />
                    </div>
                </div>
            )}

        </div>
    );
}

export default ProjectGallery;