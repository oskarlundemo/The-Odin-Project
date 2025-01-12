import {useEffect} from "react";
import {getGarments} from "../src/services/api.js";


export const Home = () => {

    useEffect(() => {
        getGarments();
    },[])


    return (

        <main className="main-home-page">
            <h1>Welcome to the Garment Store!</h1>
        </main>
    )
}