import React, { useState } from "react";
import '../../../App.css';

const Checkout = () => {
    const [inputdata, setInputData] = useState({
        Email: "",
        Phone: "",
        Country: "",
        FName: "",
        LName: "",
        Address: "",
        Address2: "",
        City: "",
        State: "",
        ZIP: "",

    });

    const userData = (a) => {
        const name = a.target.name;
        const value = a.target.value;
        console.log(inputdata);
        setInputData({ ...inputdata, [name] : value })
    }
 let containfo = false;
    const handelSubmite = () =>{
        console.log(inputdata);
        containfo = true;
    }
    return (
        <div>
            <div className="aem-Grid aem-Grid--12 demo-Grid checkout">
                <h1>Checkout</h1>
                <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn shiping-address">
                    <h2>Guest Checkout</h2>
                    <h3>Contact information</h3>
                    <p>We’ll use these details to keep you informed on your delivery.</p>
                    <div className="aem-Grid aem-Grid--12 demo-Grid ">
                        <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn contact ">
                            <label htmlFor="Email">Email</label><br />
                            <input type="text" value={inputdata.Email}
                                onChange={userData}
                                name="Email" id="Email" placeholder="abc@xyz.com" />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn contact">
                            <label htmlFor="Phone">Phone Number</label><br />
                            <input type="text" value={inputdata.Phone}
                                onChange={userData}
                                name="Phone" id="Phone" placeholder="(222) 222-2222" />
                        </div>
                        <h4>1. Shipping Information</h4>
                        <div className="aem-Grid aem-Grid--12 demo-Grid shiping-input">
                            <label htmlFor="Country">Country</label><br />
                            <input type="text" value={inputdata.Country}
                                onChange={userData}
                                name="Country" id="Country" placeholder="United States" />
                        </div>
                        <br />
                        <div className="aem-Grid aem-Grid--12 demo-Grid">
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn contact">
                                <label htmlFor="FName">First Name</label><br />
                                <input type="text" value={inputdata.FName}
                                    onChange={userData}
                                    name="FName" id="FName" placeholder="" />
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn contact">
                                <label htmlFor="LName">Last Name</label><br />
                                <input type="text" value={inputdata.LName}
                                    onChange={userData}
                                    name="LName" id="LName" placeholder="" />
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn contact">
                                <label htmlFor="Address">Street Address</label><br />
                                <input type="text" value={inputdata.Address}
                                    onChange={userData}
                                    name="Address" id="Address" placeholder="" />
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn contact">
                                <label htmlFor="Address2">Street Address 2</label><br />
                                <input type="text" value={inputdata.Address2}
                                    onChange={userData}
                                    name="Address2" id="Address2" placeholder="" />
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn contact">
                                <label htmlFor="City">City</label><br />
                                <input type="text" value={inputdata.City}
                                    onChange={userData}
                                    name="City" id="City" placeholder="Altadena" />
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn state-input">
                                <div className="aem-Grid aem-Grid--12 demo-Gridd">
                                    <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn">
                                        <label htmlFor="State">State</label><br />
                                        <input type="text" value={inputdata.State}
                                            onChange={userData}
                                            name="State" id="State" placeholder="California" />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--4 demo-GridColumn">
                                        <label htmlFor="ZIP">ZIP</label><br />
                                        <input type="text" value={inputdata.ZIP}
                                            onChange={userData}
                                            name="ZIP" id="ZIP" placeholder="91001" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="continue" onClick={handelSubmite}>CONTINUE TO SHIPPING METHOD</button>
                </div>
                <div className=" aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn sign-in">
                    <h3>Sign in for Express <br /> Checkout</h3>
                    <button>SIGN IN</button>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn cart-block">
                    <h1>Pricing Summary</h1>
                    <div className="cart-pricing">
                        <div className="pricing">
                            <div className="pricing-title">
                                <h4>Subtotal</h4>
                                <h4>Coupon</h4>
                                <h4>Gift Card</h4>
                                <h4>Estimated tax</h4>
                                <h4>Estimated shipping</h4>
                                <p>Estimated Total</p>
                            </div>
                            <div className="pricing-amount">
                                <h4>$  388.00</h4>
                                <h4>- $ 77.60</h4>
                                <h4>- $ 100.00</h4>
                                <h4>$ 23.28</h4>
                                <h4>FREE</h4>
                                <p>$ $ 233.68</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={containfo ? 'contact1' : 'contact2'}>
                <p>{inputdata.Email}</p>
            </div> */}
        </div>
    );
}

export default Checkout;