import React from 'react';
import styles from 'components/image/image.module.css';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';


type Props = {
 img: string,
 id: string;
 index: number;
};


export const SortableImage: React.FC<Props> = (props: Props) => {
    const { img, id} = props;

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        index,
        isDragging,
    } = useSortable({id});

    const imgStyles = {
        borderRadius: '8px',
        WebkitUserDrag: 'none',
        touchAction: 'none',
        transform: CSS.Translate.toString(transform),
        transition,
        backgroundImage: `url(${img})`,
        ...((isDragging || index !== 0)  && { height: '140px' }),
        ...(isDragging && index === 0 ? { gridColumn: '1 / 2' } : null),
        ...(isDragging && {zIndex: 9999})
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

