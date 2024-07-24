import { useEffect, useState } from 'react';

function useStoredState(initialValue, key) {
    const storedValue = JSON.parse(localStorage.getItem(key));
    const [value, setValue] = useState(
        storedValue ? storedValue : initialValue
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}

export { useStoredState };
