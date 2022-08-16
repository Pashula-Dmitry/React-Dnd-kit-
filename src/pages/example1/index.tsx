import React, {useMemo, useState } from 'react';

import {
    rectIntersection,
    DndContext,
    DragStartEvent,
    DragEndEvent,
    useSensors,
    useSensor,
    PointerSensor,
    MouseSensor,
    TouchSensor,
} from '@dnd-kit/core';

import {arrayMove, rectSortingStrategy, SortableContext} from '@dnd-kit/sortable';

import { useMockData } from '../../hooks/useMockData';
import { DragItem } from '../../__mock__';
import { snapCenterToCursor } from '@dnd-kit/modifiers';
import Gallery from 'components/gallery';
import { SortableImage } from '../../components/image';



const Example1: React.FC = () => {

    const {dragItems, setDragItems} = useMockData();
    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor),
        useSensor(PointerSensor),
    );
    const [activeId, setActiveId] = useState<string>('');

    const dragIndex = useMemo(() => dragItems.findIndex((itm) => itm.id === activeId), [dragItems, activeId]);




    function handleDragStart(event: DragStartEvent & { active: { id: string }  }, ...rest: any) {
        setActiveId(event.active.id);
        // @ts-ignore
        const index = event.active.data.current.sortable.index;
        console.log(index);
    }

    function handleDragEnd(event: DragEndEvent) {
        const {active, over} = event;

        if (active.id !== over?.id) {
            setDragItems((items: DragItem[]) => {
                let oldIndex;
                let newIndex;

                if ( typeof active.id === 'string' && typeof over?.id === 'string') {
                     oldIndex = items.findIndex((itm) => itm.id === active.id);
                     newIndex = items.findIndex((itm) => itm.id === over.id);
                }

                setActiveId('');

                // @ts-ignore
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    function handleDragCancel() {
        setActiveId('');
    }

    return (
            <div style={{
                margin: 'auto 0',

            }}>
                <div style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                }}>
                    <DndContext
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onDragCancel={handleDragCancel}
                        sensors={sensors}
                        collisionDetection={rectIntersection}
                        modifiers={dragIndex === 0 ? [snapCenterToCursor] : []}
                    >
                        <Gallery>
                            <SortableContext items={dragItems} strategy={rectSortingStrategy}>
                                {
                                    dragItems.map((dragItem, index) => (
                                        <SortableImage
                                            id={dragItem.id}
                                            index={index}
                                            key={dragItem.id}
                                            img={dragItem.img}
                                        />))
                                }
                            </SortableContext>
                        </Gallery>
{/*                        <DragOverlay adjustScale={true} zIndex={5}>
                            {activeId ? (
                                <Photo img={dragItems[dragIndex].img} index={dragIndex} />
                            ) : null}
                        </DragOverlay>*/}
                    </DndContext>
                </div>

            </div>
    );
};

export default Example1;

