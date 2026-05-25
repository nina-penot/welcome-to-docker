import { useEffect } from "react";
import useDatabase from "../hooks/useDatabase";

export default function GetDatabase() {

    const { data, loading, error, setRefecth } = useDatabase();

    let message = error ? "ERROR: " + error : "Database has loaded : " + data.status;

    useEffect(() => {
        if (loading) {
            console.log("getting data...");
        } else {
            console.log("data ready : ", data);
        }

        if (error) {
            console.log(error);
        }
    }, [loading])

    if (loading) {
        return (
            <div>Database loading...</div>
        )
    } else {
        return (
            <div>{message}</div>
        )
    }
}