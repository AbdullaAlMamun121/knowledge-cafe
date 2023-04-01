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
            <div class="card">
                <div class="card-header">
                    How to works useState() function in react?
                </div>
                <div class="card-body">
                    <p class="card-text">
                        With React, useState can store any kind of data. Both simple data types like text, integer, and Boolean as well as more complicated data types like array, object, and function fall under this category. Even unique data types, such as class instances, are included.

                        In essence, everything that can be kept in a JavaScript variable may also be kept in a state controlled by useState. useState can control value that is get from function ,there are two type state like count and setCount count contain current value and setCount contain changing value that is coming from another function.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    How to works useEffect() function in react and how many feature are available?
                </div>
                <div class="card-body">
                    <p class="card-text">
                        React provides a hook called useEffect that enables you to execute side effects in function components. It automatically runs after each render and includes a cleaning function that starts before the next effect.
                        These are some frequent applications of useEffect:
                        data retrieval from a database or API
                        Changing the title of the document
                        revising the component state
                        Events subscription
                        updating a canvas or other graphic components
                        UseEffect should not be utilized for every situation, and employing it has drawbacks that must be taken into account. UseEffect, for instance, might make your code more challenging to comprehend and debug when used for sophisticated reasoning.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Question;