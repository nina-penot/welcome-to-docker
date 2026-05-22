import { useState, useEffect } from "react";

export default function useDatabase() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState({});
    const [refetch, setRefecth] = useState({});

    async function getApi() {
        setLoading(true);
        try {

            const response = await fetch("/db-test", {
                method: "GET"
            });

            console.log("res", response);
            //
            //console.log("test", response.json());
            const mydata = await response.json();
            console.log("data", mydata);
            if (!response.ok) {
                throw { status: response.status, message: data.error || 'Erreur' };
            }
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