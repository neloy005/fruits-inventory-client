import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ 'height': '450px' }}>
            <Spinner animation="border" variant="success" />
        </div>
    );
};

export default Loading;