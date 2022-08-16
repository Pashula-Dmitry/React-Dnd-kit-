import React, { useState } from 'react';
import {ContextMockItems} from '../../contexts/DragItemsContext';
import {DragItem, items} from '__mock__';

interface Props {
    children: React.ReactNode;
}

const WrappedData: React.FC<Props> = ( { children }: Props ) => {

    const [dragItems, setDragItems] = useState<DragItem[]>(() => items);

    return (
        <ContextMockItems.Provider value={{ dragItems, setDragItems }}>
            {children}
        </ContextMockItems.Provider>
    );
};

export default WrappedData;
