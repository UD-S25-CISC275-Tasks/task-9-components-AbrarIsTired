import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const changeType = () => {
        if (questionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    };

    let displayText = "Short Answer";
    if (questionType === "multiple_choice_question") {
        displayText = "Multiple Choice";
    }

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            <p>{displayText}</p>
        </div>
    );
}
