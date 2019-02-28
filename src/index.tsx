import React from 'react';
import ReactDOM from 'react-dom';

import {Card} from './components/Card';

const App = () => (
    <div>
        <Card text="wat" />
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);