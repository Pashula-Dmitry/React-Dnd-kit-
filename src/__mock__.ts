import { v4 as uuidv4 } from 'uuid';
import cs from './assets/imgs/cs.jpg';
import test from './assets/imgs/test.png';

export type DragItem = {
    id: string,
    img: string,
    alt: string
};

export const items: DragItem[] = [
    { id: uuidv4(), img: cs, alt: '' },
    { id: uuidv4(), img: test, alt: '' },
    { id: uuidv4(), img: cs, alt: '' },
    { id: uuidv4(), img: test, alt: '' },
    { id: uuidv4(), img: cs, alt: '' },
    { id: uuidv4(), img: test, alt: '' },
    { id: uuidv4(), img: cs, alt: '' },
    { id: uuidv4(), img: test, alt: '' },
    { id: uuidv4(), img: cs, alt: '' },
    { id: uuidv4(), img: test, alt: '' },
];
