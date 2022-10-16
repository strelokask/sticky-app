import { useCallback, useEffect, useState } from 'react';
import { parseJSON } from '../parsing';
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
    const getValue = useCallback((): T => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? parseJSON(item) as T : initialValue
        }
        catch (error) {
            console.warn(`Error while reading from localStorage ${key} :`, error);
            return initialValue;
        }
    }, [initialValue, key])

    const [storageValue, setStorageValue] = useState<T>(getValue);

    useEffect(() => {
        getValue();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setValue = useCallback((value: T) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
            setStorageValue(value)
        } catch (error) {
            console.warn(`Error setting localStorage key “${key}”:`, error)
        }
    }, [key])
    return [storageValue, setValue];
}