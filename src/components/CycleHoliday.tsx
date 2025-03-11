import React, { useState } from "react";
import { Button } from "react-bootstrap";

<<<<<<< HEAD
// Define Holiday type
type Holiday =
    | "Eid-Ul-Fitr"
    | "Eid-Ul-Adha"
    | "New Years"
    | "Thanksgiving"
    | "Fourth of July";

export function CycleHoliday(): React.JSX.Element {
    // Holiday details with emojis, dates, and names
    const holidayDetails: Record<Holiday, { emoji: string; month: number }> = {
        "Eid-Ul-Fitr": { emoji: "🕌", month: 4 },
        "Eid-Ul-Adha": { emoji: "🐑", month: 7 },
        "New Years": { emoji: "🎆", month: 1 },
        Thanksgiving: { emoji: "🦃", month: 11 },
        "Fourth of July": { emoji: "🎇", month: 7 }
    };

    // Alphabetical order function
    const getNextHolidayAlphabetically = (current: Holiday): Holiday => {
        const holidays: Holiday[] = [
            "Eid-Ul-Adha",
            "Eid-Ul-Fitr",
            "Fourth of July",
            "New Years",
            "Thanksgiving"
        ];
        const currentIndex = holidays.indexOf(current);
        return holidays[(currentIndex + 1) % holidays.length];
    };

    // Yearly order function
    const getNextHolidayByYear = (current: Holiday): Holiday => {
        const holidays: Holiday[] = [
            "New Years",
            "Eid-Ul-Fitr",
            "Fourth of July",
            "Thanksgiving",
            "Eid-Ul-Adha"
        ];
        const currentIndex = holidays.indexOf(current);
        return holidays[(currentIndex + 1) % holidays.length];
    };

    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("New Years");

    const advanceByAlphabet = () => {
        setCurrentHoliday(getNextHolidayAlphabetically(currentHoliday));
    };

    const advanceByYear = () => {
        setCurrentHoliday(getNextHolidayByYear(currentHoliday));
    };

    return (
        <div className="text-center space-y-4">
            <div className="text-2xl">
                Holiday: {holidayDetails[currentHoliday].emoji}
            </div>
            <div className="space-x-2">
                <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
                <Button onClick={advanceByYear}>Advance by Year</Button>
            </div>
        </div>
    );
=======
export function CycleHoliday(): React.JSX.Element {
    return <div>Cycle Holiday</div>;
>>>>>>> origin/task-components
}
