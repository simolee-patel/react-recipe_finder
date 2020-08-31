import React from 'react'
import web from "../src/imgs/home.png";
import "./home.css"
import { NavLink } from 'react-router-dom';
import Common from './Common';
const Home = () => {
    return (
        <>
            <Common
                name="Lets Cook Together"
                desc="Here is the quick and best recipes for you all guyss."
                imgsrc={web}
                visit="/service"
                btnname="Get Started"
            />
        </>
    )

}

export default Home;