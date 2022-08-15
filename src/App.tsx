import React, {FC} from 'react';
import Routes from './components/Routres';
import Header from './components/Header';
import Container from './components/Container';
import WrappedData from './components/WrappedData';

const App: FC = () => {
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
