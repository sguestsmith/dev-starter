"use client"
import { useState, useEffect } from 'react';
import Stack, { onEntryChange } from '../../../lib/index'

export default function Page({ params }){
    const [entry, setEntry] = useState({});

    const getContent = async () => {
        const entry = await Stack.getElementByUrl('page', '/page/' + params.title);
        console.log(entry)
        setEntry(entry);
    }

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    return(
        <div>
            {entry?.content}
        </div>
    )
}