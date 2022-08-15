import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import {rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';

import styleGallery from './gallery/gallery.module.css';
import { useMockData } from '../hooks/useMockData';
import { Image } from '../components/Image';


const Gallery: React.FC = () => {

    const {dragItems} = useMockData();
    const {setNodeRef} = useDroppable({
        id: 'droppable',
    });


    return (
        <div
            ref={setNodeRef}
            className={styleGallery.gallery}
            >
            <SortableContext items={dragItems} strategy={rectSortingStrategy}>
                {
                    dragItems.map((dragItem) => (
                        <Image
                            id={dragItem.id}
                            key={dragItem.id}
                            img={dragItem.img}
                            alt={dragItem.alt}
                        />))
                }
            </SortableContext>
        </div>
    );
};

export default Gallery;
