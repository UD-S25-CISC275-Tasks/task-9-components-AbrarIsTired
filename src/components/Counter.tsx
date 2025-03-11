import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
<<<<<<< HEAD
    const [value, setValue] = useState<number>(0); // Value setter and Value's "Value". Starts off as 0
    return (
        <span>
            <Button
                onClick={() => {
                    setValue(1 + value);
                }}
            >
                Add One
            </Button>
=======
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
>>>>>>> origin/task-components
            to {value}.
        </span>
    );
}
