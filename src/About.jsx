import React from 'react'
import about from "../src/imgs/aboutus.png";
import "./home.css"
import { NavLink } from 'react-router-dom';
import Common from './Common';
const About = () => {
    return (
        <>
            <Common
                name="We Are here to Help You"
                desc="Here is the quick and best recipes for you all guyss. check the recipe section for search your recipe"
                imgsrc={about}
                visit="/service"
                btnname="Know More "
                classname="size_inc"

            />
        </>
    )

}

export default About;