import { useState } from "react";

export function Toggle() {
    const [isOn, setIsOn] = useState<boolean>(false);
    return (
        <div>
            <button onClick={() => setIsOn(!isOn)}>Toggle</button>
            <p>Is On: {isOn ? 'Yes' : 'No'}</p>
        </div>
    )
}