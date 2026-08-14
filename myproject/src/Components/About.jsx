import React from 'react';
import './About.css';

function About() {
    return (

        <>
            <div className="main">
                <h1 className='text'>About Us</h1>
            </div>

            <div className="container">
                <div className="row align-items-center">

                    <div className="col-6 mt-5">
                        <img
                            src="https://website-d45a5.firebaseapp.com/static/media/bgImage.c6632160337392899915.webp"
                            alt=""
                            className="img-fluid rounded-4 shadow"
                        />
                    </div>

                    <div className="col-6 text-center myFont">
                        <h1 className='mt-5'>Themeland Night Market</h1>
                        <h4 className='mt-3'>Operating since 2020</h4>
                        <p className='mt-3'>This is a paragraph. You can write your own content here, and fill in <br /> the blanks. What's your story and where do you go from here? Tell the <br /> world about your business, and made this text yours. This is a <br /> paragraph. You can write your own content here, and fill in the blanks. <br /> What's your story and where do you go from here? Tell the world <br /> about your business, and made this text yours.</p>

                        <button className="btn btn-outline-primary brownBtn">
                            See Our Vendors
                        </button>

                    </div>

                </div>
            </div>







            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-6 text-center myFont">
                        <h1 className='mt-5'>Find the Perfect Gift!</h1>
                        <h4 className='mt-3'>Handmade with Love</h4>
                        <p className='mt-3'>Discover unique, handcrafted gifts made with love. Whether you're <br /> shopping for a friend, family, or yourself, our vendors offer something <br /> special for everyone.</p>


                        <a href="https://www.eventbrite.com/">
                            <button className="btn btn-outline-primary brownBtn">
                                Buy Tickets
                            </button>
                        </a>
                    </div>


                    <div className="col-6 mt-5 ">
                        <img
                            src="https://website-d45a5.firebaseapp.com/static/media/gift.0ed8008c5d39a7203342.webp"
                            alt=""
                            className="img-fluid rounded-4 shadow"
                        />
                    </div>

                </div>
            </div>





            <div className="multi">
                <h6 className="follow">Follow Us @ThemelandNM</h6>
                <div className="d-flex gap-3 overflow-hidden">
                    <marquee direction="right" behavior="alternate">
                        <img src="https://website-d45a5.firebaseapp.com/static/media/nm1.2aefd18c21ecf4c983e1.webp" className="product" alt="" />
                        <img src="https://website-d45a5.firebaseapp.com/static/media/nm2.ea45ddde4d4a778c4e7f.webp" className="product" alt="" />
                        <img src="https://website-d45a5.firebaseapp.com/static/media/nm3.078f0c3291fa2dab4ae3.webp" className="product" alt="" />
                        <img src="https://website-d45a5.firebaseapp.com/static/media/nm4.067fbb71cab9fb197a3a.webp" className="product" alt="" />
                        <img src="https://website-d45a5.firebaseapp.com/static/media/nm5.22e7a001988948d87d00.webp" className="product" alt="" />
                        <img src="https://website-d45a5.firebaseapp.com/static/media/nm6.67a21736bbed0ceb5c48.webp" className="product" alt="" />
                        <img src="https://website-d45a5.firebaseapp.com/static/media/nm8.95605bbf5066ed8c5521.jpg" className="product" alt="" />
                        <img src="https://website-d45a5.firebaseapp.com/static/media/nm9.f3b74c108ee1f1f0a64b.jpg" className="product" alt="" />
                    </marquee>
                </div>
            </div >









        </>
    );
}

export default About;
