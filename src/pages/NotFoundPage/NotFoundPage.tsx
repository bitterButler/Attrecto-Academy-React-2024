import React, { useState, useEffect } from 'react';
import { Page } from "../../components/page/Page";
import pic from "../../assets/2142357.jpg";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

    return (
        <Page noCard>
            <div className="container d-flex justify-content-center">
                    <div className="py-5 align-items-center flex-column text-center">
                        <div className="bg_img d-flex justify-content-center">
                            <img src={pic} alt="error picture 404" />
                        </div>
                        <Link to="/" className="btn btn-primary btn-lg mt-3">Go to Home</Link>
                    </div>
            </div>
        </Page>
    )
}

export default NotFoundPage;