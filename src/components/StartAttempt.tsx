import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
<<<<<<< HEAD
    const [attempts, setAttempts] = useState<number>(4);
    const [isInProgress, setIsInProgress] = useState<boolean>(false);

    const startQuiz = () => {
        if (attempts > 0) {
            setIsInProgress(true);
            setAttempts(attempts - 1);
        }
    };

    const stopQuiz = () => {
        setIsInProgress(false);
    };

    const useMulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            <div>Attempts: {attempts}</div>
            <Button
                onClick={startQuiz}
                disabled={isInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!isInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={useMulligan} disabled={isInProgress}>
                Mulligan
            </Button>
        </div>
    );
=======
    return <div>Start Attempt</div>;
>>>>>>> origin/task-components
}
