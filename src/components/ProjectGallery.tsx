import {ChevronLeft, ChevronRight} from 'lucide-react';

interface ProjectGalleryProps {
    images: string[];
  }

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
    return (
        <>
        <ChevronLeft/>
        <ChevronRight/>
        </>
    );
}
export default ProjectGallery;