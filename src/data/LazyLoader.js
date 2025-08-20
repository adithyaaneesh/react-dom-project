import React from 'react';

const LazyLoader = () => {

    return (
    <div className='lazy-content container'>
        <h2>This is a lazy loader component</h2>
        <p>It only loads when it's rendered.</p>
    </div>
    );
};

export default LazyLoader;