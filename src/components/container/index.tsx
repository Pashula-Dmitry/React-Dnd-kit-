import React from 'react';
import styles from './container.module.css';

interface Props {
    children: React.ReactNode;
}


const Container: React.FC<Props> = ({children}: Props) => {

    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default Container;
