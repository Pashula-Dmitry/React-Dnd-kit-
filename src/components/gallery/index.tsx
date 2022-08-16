import React from 'react';
import {useDndMonitor } from '@dnd-kit/core';

import styleGallery from 'components/gallery/gallery.module.css';


interface Props {
    children: React.ReactNode;
}

const Gallery: React.FC<Props> = ({ children }) => {


    useDndMonitor({
        onDragStart(event) {
            console.log('hello there')
        },
        onDragMove(event) {},
        onDragOver(event) {},
        onDragEnd(event) {},
        onDragCancel(event) {},
    });


    return (
        <div className={styleGallery.gallery}>
            {children}
        </div>
    );
};

export default Gallery;
