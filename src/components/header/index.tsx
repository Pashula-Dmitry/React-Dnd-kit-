import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <Link to={'/'}>Example #1</Link>
            <Link to={'/example2'}>Example #2</Link>
            <Link to={'/example3'}>Example #3</Link>

        </div>
    );
};

export default Header;
