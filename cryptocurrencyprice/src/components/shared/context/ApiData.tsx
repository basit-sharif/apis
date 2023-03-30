"use client"
import { Children, createContext, useEffect, useState } from "react"

const Apidata = createContext<any | null>(null);

async function fetchDataFromApi() {
    const res = await fetch('https://api.coincap.io/v2/assets/');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default function ApiData({ children }: { children: any }) {
    const [fetcheDataReturn, setFetcheDataReturn] = useState<any>();

    async function startFetching() {
        setFetcheDataReturn(await fetchDataFromApi());
    }
    useEffect(() => {
        startFetching();
    }, [])
    return (
        <Apidata.Provider value={fetcheDataReturn}>
            {children}
        </Apidata.Provider>
    )
}

export { Apidata }