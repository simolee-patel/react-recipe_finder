import React from 'react'
import web from "../src/imgs/home.png";
import "./home.css"
import { NavLink } from 'react-router-dom';
const Common = (prpos) => {
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 text_class">
                                    <h1>{prpos.name}</h1>
                                    <h2 className="my-3">
                                        {prpos.desc}
                                    </h2>
                                    <div className="mt-3 " >
                                        <NavLink to={prpos.visit} className="btn btn-primary button">{prpos.btnname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                                    <img src={prpos.imgsrc} className="img-fluid animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )

}

export default Common;