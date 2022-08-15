import {useContext} from 'react';
import {ContextMockItems} from '../contexts/DragItemsContext';

export const useMockData = () => useContext(ContextMockItems);
