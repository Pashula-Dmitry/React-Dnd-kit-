import React from 'react';
import Routes from 'components/routes';
import Header from 'components/header';
import Container from 'components/container';
import WrappedData from 'components/mock-data';

const App: React.FC = () => {
    return (
        <div className={'app'} style={{
            minHeight: '100vh',
        }}>
            <Header/>
            <Container>
                <WrappedData>
                  <Routes/>
                </WrappedData>
            </Container>
        </div>

    );
}

export default App;
