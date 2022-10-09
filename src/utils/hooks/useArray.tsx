import { useCallback, useMemo, useState } from "react";

type Idable<TKey> = {
    id: TKey
}

export type useArrayReturnType<T extends Idable<number>> = {
    items: T[],
    reset: (item?: T[]) => void,
    reorder: (start: number, end: number) => void,
    editItem: (item: T) => void,
    removeItem: (item: T) => void,
    addItem: (item: T) => void,
}

export function useArray<T extends Idable<number>>(): useArrayReturnType<T> {
    const [items, setItems] = useState<T[]>([]);

    const reset = useCallback((values: T[] = []) => setItems(values), []);

    const reorder = useCallback((startIndex: number, endIndex: number) => {
        const itemsCopy = [...items];
        const [removed] = itemsCopy.splice(startIndex, 1);
        itemsCopy.splice(endIndex, 0, removed);

        setItems(itemsCopy);
    }, [items])

    const editItem = useCallback((item: T) => {
        setItems(prev => prev.map(x => x.id === item.id ? ({ ...x, ...item }) : x))
    }, [])

    const removeItem = useCallback((item: T) => {
        setItems(prev => prev.filter(x => x.id !== item.id))
    }, [])

    const addItem = useCallback((item: T) => {
        setItems(prev => [...prev, item])
    }, [])

    const result = useMemo(() => {
        return { items, reset, editItem, removeItem, addItem, reorder }
    }, [editItem, items, reset, removeItem, addItem, reorder])

    return result;
}