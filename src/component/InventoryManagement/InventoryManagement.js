import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryManagement = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Inventory Management: {id}</h2>
        </div>
    );
};

export default InventoryManagement;