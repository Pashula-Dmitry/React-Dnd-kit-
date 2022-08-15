import { DragItem } from "../__mock__";
import React from 'react';

type ContextType = {
    setDragItems: React.Dispatch<React.SetStateAction<any>>;
    dragItems: DragItem[];
};

// @ts-ignore
export const ContextMockItems = React.createContext<ContextType>(null);
