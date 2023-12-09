import React from 'react';
import Button from './Button'

const App = () => {
    const clickAction = () => {
        console.log("I was clicked from parent")
    }
    return <Button clickAction={handleClickAction}>Click Me</Button>
}

export default App
