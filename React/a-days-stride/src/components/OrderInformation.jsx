import {useState} from "react";
import '../styles/OrderInformation.css'
import {useGarmentProvider} from "../../context/GarmentProvider.jsx";


export const OrderInformation = () => {


    const {details, setDetails} = useGarmentProvider();
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleDropis = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };


    return (

        <div className="order-info">

        <div className="customer-info" key={1}>
            <div className="customer-details-header" onClick={() => toggleDropis(1)}>
                <h2>01. Customer information</h2>
                {activeIndex === 1 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M200-440v-80h560v80H200Z"/></svg>)
                    : (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                            width="24px" fill="#434343">
                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                    </svg>)
                }
            </div>

            <ul className={`sub-menu ${activeIndex === 1 ? 'show' : ''}`}>
                <div>
                    <li>
                        <form>
                            <div>
                                <input type="text" name="firstName" placeholder="First name *" value={details.firstName} onChange={handleInputChange}/>
                                <input type="text" name="lastName" placeholder="Last name *" value={details.lastName} onChange={handleInputChange}/>
                            </div>

                            <input type="email" name="email" placeholder="Email *" value={details.email} onChange={handleInputChange}/>
                            <input type="phone" name="phone"placeholder="Phone number *" value={details.phone} onChange={handleInputChange}/>

                            <input type="text" name="address" placeholder="Street address *" value={details.address} onChange={handleInputChange}/>

                            <div>
                                <input type="text" name="zip" placeholder="Postal code *" value={details.zip} onChange={handleInputChange}/>
                                <input type="text" name="city" placeholder="City *" value={details.city} onChange={handleInputChange}/>
                            </div>

                            <button>
                                PROCEED TO DELIVERY
                            </button>
                        </form>

                    </li>
                </div>
            </ul>
        </div>


    <div className="shipping-instructions" key={2}>

        <div className="shipping-details-header" onClick={() => toggleDropis(2)}>
            <h2>02. Shipping options</h2>
            {activeIndex === 2 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#434343">
                        <path d="M200-440v-80h560v80H200Z"/>
                    </svg>)
                : (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                        width="24px" fill="#434343">
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                </svg>)
            }
        </div>

        <ul className={`sub-menu ${activeIndex === 2 ? 'show' : ''}`}>
            <div>
                <li>
                    <div className="payment-info">
                    <form>
                        <div className="shipping-header-zip">
                            <h3>Delivery postal code</h3>
                            <input type="text" name="zip" placeholder="Enter your postal code" value={details.zip}
                                   onChange={handleInputChange}/>
                        </div>

                        <div className="shipping-options-container">

                            <h3>Delivery options</h3>
                            <div className="shipping-options">
                                <div>
                                    <input type="radio" id="standard-shipping" name="shipping" value="standard"
                                           defaultChecked/>
                                    <label htmlFor="standard-shipping">Standard shipping</label>
                                </div>
                                <div>
                                    <input type="radio" id="expedited-shipping" name="shipping" value="expedited"/>
                                    <label htmlFor="expedited-shipping">Expedited shipping</label>
                                </div>
                                <div>
                                    <input type="radio" id="next-day-shipping" name="shipping" value="next-day"/>
                                    <label htmlFor="next-day-shipping">Next day shipping</label>
                                </div>
                            </div>
                        </div>
                    </form>
                        <button>PROCEED TO PAYMENT</button>
                    </div>
                </li>
            </div>
        </ul>
    </div>


            <div className="payment-section" key={3}>
        <div className="payment-details-header" onClick={() => toggleDropis(3)}>
            <h2>03. Payment</h2>
            {activeIndex === 3 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#434343">
                        <path d="M200-440v-80h560v80H200Z"/>
                    </svg>)
                : (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                        width="24px" fill="#434343">
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                </svg>)
            }
        </div>

        <ul className={`sub-menu ${activeIndex === 3 ? 'show' : ''}`}>
            <div>
                <li>
                    <div className="payment-info">
                        <form>
                            <div className="payment-options-container">
                                <div className="payment-options">
                                    <div>
                                        <input type="radio" id="standard-shipping" name="shipping" value="standard"
                                               defaultChecked/>
                                        <img src="../../public/klarna.png"/>
                                        <label htmlFor="standard-shipping">Klarna</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="expedited-shipping" name="shipping" value="expedited"/>
                                        <img src="../../public/swish.png"/>
                                        <label htmlFor="expedited-shipping">Swish</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="next-day-shipping" name="shipping" value="next-day"/>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                             width="24px" fill="#434343">
                                            <path
                                                d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"/>
                                        </svg>
                                        <label htmlFor="next-day-shipping">Card</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
            </div>
        </ul>
            </div>

        </div>


    )
}

