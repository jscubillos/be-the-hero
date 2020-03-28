import React, { useState } from 'react';

export default function Header({ children }) {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return(
        <header>
            <h1>{children} = {counter}</h1> 
            <button onClick={increment}>Increment</button>
        </header>
    );
}