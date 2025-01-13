import {useEffect, useState} from "react";
import {getGarments} from "../src/services/api.js";
import {ProductCard} from "../src/components/ProductCard.jsx";
import '../src/styles/Home.css';


export const Home = () => {


    const [garments, setGarments] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect ( () => {
        const loadGarments = async () => {
            try {
                const clothes = await getGarments();
                setGarments(clothes);
            } catch (error) {
                setError("No pieces found");
                console.error(error);
            } finally {
                setLoading(false); //toggla deena
            }
        };
        loadGarments();
    }, [])




    return (

        <main className="main-home-page">

            <h2>New Arrivals - Menswear</h2>
            <section className={`womens-wear ${loading ? 'loading' : ''}`}>
                {garments.map(garment => (
                    <ProductCard product={garment} key={garment.id}/>
                ))}
            </section>

            <h2>New Arrivals - Womenswear</h2>
            <section className={`mens-wear ${loading ? 'loading' : ''}`}>
                {garments.map(garment => (
                    <ProductCard product={garment} key={garment.id}/>
                ))}
            </section>
        </main>
    )
}