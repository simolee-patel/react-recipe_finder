import React, { useState } from 'react';
import axios from 'axios';
import Recipe from "./Recipe";
import Alert from "./Alert";
import { v4 as uuidv4 } from 'uuid';
const Service = () => {

    const [query, setQuery] = new useState("");
    const [recipe, setRecipe] = new useState([]);
    const [alert, sertAlert] = new useState("");
    const APP_ID = "9fb3a946";
    const APP_KEY = "9c2ba3083d2dadf1166aa1f369139e98";
    const url = `https://api.edamam.com/search?q=${query}&app_id=9fb3a946&app_key=9c2ba3083d2dadf1166aa1f369139e98& from=0 & to=3 & calories=591 - 722 & health=alcohol - free`;

    const getData = async () => {
        if (query != "") {
            const result = await axios.get(url);
            if (!result.data.more) {
                return sertAlert("No Food With This Name")
            }
            setRecipe(result.data.hits);
            console.log(result);
            sertAlert("");
            setQuery("");
        }
        else {
            sertAlert('please fill the form')
        }

    }
    const onChange = e => {
        setQuery(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        getData();
    }
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid text-center mt-5">
                    <h3 onClick={getData}>Search recipe </h3>
                    <form className="search-form" onSubmit={onSubmit}>
                        {alert != "" && <Alert alert={alert} />}
                        <input className="input" type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} value={query} />
                        <input type="submit" value="search" className="button" />
                    </form>
                </div>
                <div className="recipes">
                    {recipe !== [] && recipe.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}

                </div>

            </section>

        </>
    )

}

export default Service;