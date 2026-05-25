import { useState, useEffect } from "react";

export default function useDatabase() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState({});
    const [refetch, setRefecth] = useState({});

    async function getApi() {
        setLoading(true);
        const URL = import.meta.env.VITE_API_URL;
        try {
            //console.log(import.meta.env);
            //console.log("my env url", URL);
            //console.log("chokidar", import.meta.env.CHOKIDAR_USEPOLLING);
            const response = await fetch(URL + "/db-test", {
                method: "GET"
            });

            if (!response.ok) {
                console.log("response not ok!");
                throw { status: response.status, message: data.error || 'Erreur' };
            }

            console.log("res", response);
            //
            //console.log("test", response.json());
            const mydata = await response.json();
            console.log("data", mydata);

            console.log("mydata ", mydata);

            setData(mydata);

            return mydata;

        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getApi();
    }, [refetch]);

    return { data, loading, error, setRefecth }

}