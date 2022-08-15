import React from 'react';
import styles from './image/image.module.css';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';


type Props = {
 img: string,
 alt: string;
 id: string;
};


export const Image: React.FC<Props> = (props: Props) => {
    const { img, alt, id} = props;

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id});

    const imgStyles = {
        borderRadius: '8px',
        WebkitUserDrag: 'none',
        transform: CSS.Translate.toString(transform),
        transition,
        backgroundImage: `url(${img})`,
    };

    return (
        <div
            ref={setNodeRef}
            className={styles.imageItem}
            style={imgStyles}
        {...listeners}
        {...attributes}
        >
        </div>
    );
};

