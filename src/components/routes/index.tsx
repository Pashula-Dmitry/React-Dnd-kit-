import React from 'react';
import {useRoutes} from 'react-router-dom';
import Example1 from '../../pages/example1';
import Example2 from '../../pages/example2';
import Example3 from '../../pages/example3';
import { NoMatch } from 'components/no-match';

const Routes: React.FC = () => {

    return useRoutes([
        { path: '/',         element: <Example1 /> },
        { path: '/example2', element: <Example2 /> },
        { path: '/example3', element: <Example3 /> },
        { path: "*",         element: <NoMatch />  },
    ]);
};

export default Routes;
