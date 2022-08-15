import React from 'react';

import {
    closestCorners,
    rectIntersection,
    DndContext,
    DragStartEvent,
    DragOverEvent,
    DragEndEvent,
    useSensors,
    useSensor,
    MouseSensor,
    TouchSensor,
    ScreenReaderInstructions,
    Announcements,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

import { useMockData } from '../../hooks/useMockData';
import { DragItem } from '../../__mock__';
import Gallery from '../../components/Gallery';


const Example1: React.FC = () => {

    const {dragItems, setDragItems} = useMockData();
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    function handleDragStart(event: DragStartEvent, ...rest: any) {
        console.log(event);
        console.log('rest = .> ', );

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

                // @ts-ignore
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    function handleDragOver(event: DragOverEvent) {
        const {active, over} = event;

        if (active.id !== over?.id) {
            setDragItems((items: DragItem[]) => {

                let oldIndex;
                let newIndex;

                if ( typeof active.id === 'string' && typeof over?.id === 'string') {
                    oldIndex = items.findIndex((itm) => itm.id === active.id);
                    newIndex = items.findIndex((itm) => itm.id === over.id);
                }

                // @ts-ignore
                return arrayMove(items, oldIndex, newIndex);
            });
        }
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
                        collisionDetection={rectIntersection}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        sensors={sensors}
                    >
                        <Gallery />
                    </DndContext>
                </div>

            </div>
    );
};

export default Example1;
