import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
<<<<<<< HEAD
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <Button onClick={toggleVisibility}>Reveal Answer</Button>
            {isVisible && <p>42</p>}
        </div>
    );
=======
    return <div>Reveal Answer</div>;
>>>>>>> origin/task-components
}
