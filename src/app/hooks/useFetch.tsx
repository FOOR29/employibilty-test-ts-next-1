import { useEffect, useState } from "react";
import { characters } from "../types";

export function UseFetch(url: string) {

    const [data, setData] = useState<characters[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const abortController = new AbortController();

        setLoading(true)
        setError(null)

        // funcion fetch
        fetch(url, { signal: abortController.signal })
            .then(res => res.json())
            .then(json => setData(json.results))
            .catch(err => {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            })
            .finally(() => setLoading(false))

        return () => abortController.abort();
    }, [url])

    return { data, loading, error }
}