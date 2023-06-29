import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
}

interface FetchGameResults {
    count: number;
    results: Game[];
}

const useGames = () => {
    const controller = new AbortController();
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        apiClient
            .get<FetchGameResults>("games", {signal: controller.signal})
            .then((res) => {
                setGames(res.data.results);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)});
        return () => controller.abort();
    }, []);
    return {games, error, isLoading}
}

export default useGames;