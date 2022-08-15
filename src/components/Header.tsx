import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-around',
        }}>
            <Link to={'/'}>Example #1</Link>
            <Link to={'/example2'}>Example #2</Link>
            <Link to={'/example3'}>Example #3</Link>

        </div>
    );
};

export default Header;
