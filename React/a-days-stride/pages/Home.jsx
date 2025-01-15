import {useEffect, useState} from "react";
import {getMaleClothing, getFemaleClothing} from "../src/services/api.js";
import {ProductCard} from "../src/components/ProductCard.jsx";
import '../src/styles/Home.css';
import {Footer} from "../src/components/Footer.jsx";
import {Link} from "react-router-dom";


export const Home = () => {

    const [maleGarments, setMaleGarments] = useState([]);
    const [femaleGarments, setFemaleGarments] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const loadGarments = async () => {
            try {
                const maleClothes = await getMaleClothing();
                const femaleClothes = await getFemaleClothing();
                setMaleGarments(maleClothes);
                setFemaleGarments(femaleClothes);
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

            <section className='mens-wear'>
                <h2>New Arrivals - Menswear</h2>
                <div className={`product-container ${loading ? 'loading' : ''}`}>
                    {maleGarments.map(garment => (
                        <Link to="/product"
                              state={{garment}}
                              key={garment.id}>
                            <ProductCard product={garment} key={garment.id}/>
                        </Link>
                    ))}
                </div>
            </section>

            <section className='section-divider'>
                <img src='../public/accesories-stock.jpg' alt=''/>
            </section>

            <section className='womens-wear'>
                <h2>New Arrivals - Womenswear</h2>
                <div className={`product-container ${loading ? 'loading' : ''}`}>
                    {femaleGarments.map(garment => (
                        <Link to="/product"
                              state={{garment}}
                              key={garment.id}>
                            <ProductCard product={garment} key={garment.id}/>
                        </Link>
                    ))}
                </div>
            </section>

            <section className='section-women-men'>
                <div>
                    <p>Menswear</p>
                </div>
                <div>
                    <p>Womenswear</p>
                </div>
            </section>
        </main>
    )
}