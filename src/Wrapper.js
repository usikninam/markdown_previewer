import React from 'react';

const Wrapper = ({ children, componentName }) => {

    return (
        <>
            <div className="wrapper">
                <h5 class="bg-dark text-light">{componentName}</h5>
                {children}
            </div>
        </>
    );
};

export default Wrapper;