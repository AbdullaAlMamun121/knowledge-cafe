import React from 'react';

const Question = () => {
    return (
        <div>
            <div class="card">
                <div class="card-header">
                    Difference between props and state in react?
                </div>
                <div class="card-body">
                    <p class="card-text">
                        Props and state are both used in React to handle data in a component, but they differ in several significant ways.

                        Properties (abbreviated as "props") are transferred from a parent component to a child component. As they are immutable, that means the child component could not change the object values. Children components can only read props.

                        A component manages state (state), which is mutable. The setState() function allows the component itself to modify it. React will automatically re-render the component when the state is changed to reflect the new state.

                        Props are used to transfer data between parent and child components, whereas state is used to maintain data within a single component.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Question;