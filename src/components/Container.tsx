import React from 'react';

interface Props {
    children: React.ReactNode;
}


const Container: React.FC<Props> = ({children}: Props) => {

    return (
        <div className={'container'} style={{
            maxWidth: '1140px',
            margin: '150px auto',
            height: '100%',
        }}>
            {children}
        </div>
    );
};

export default Container;
