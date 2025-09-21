import { useState, useEffect } from "react";

export default function Content() {
    const [ count, setCount ] = useState(0);
    const [isBool, setIsBool] = useState(true);

    const addcount = () => {
        setCount(count + 1);
    };

    const ifBool = () => {
        return isBool ? (
            <>
                <p>Bool is True</p>
            </>
        ) : (
            <>
                <p>Bool is False</p>
            </>
        );
    };

    const [ timer, setTimer ] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTimer((prev) => prev + 1);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [timer]);

    return (
        <>
        <div>
            <h1>Content</h1>
            <h2>Counter: {count}</h2>
            <h2>Timer: {timer}</h2>
            <button onClick={addcount}>Add Count</button>
            <button onClick={() => setIsBool((isTrue) => !isTrue)}>Bool Button</button>
            {ifBool()}
        </div>
        </>
    );
}

