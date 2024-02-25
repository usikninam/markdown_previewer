import React from 'react';

const Wrapper = ({ children }) => {

    // Attempt to retrieve the child component's name
    let componentName = '';
    if (React.Children.count(children) === 1 && React.isValidElement(children)) {
        componentName = children.type.name || 'Unknown Component';
    }

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