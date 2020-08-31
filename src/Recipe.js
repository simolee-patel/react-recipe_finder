import React from 'react'

const Recipe = ({ recipe }) => {
    const { label, image, url, ingredients } = recipe.recipe;
    return (
        <div className="recipe">
            <img src={image} alt={label} />
            <h2>{label}</h2>
            <a href={url} target="_blank" rel="noopener noreferrer" >Get More Info</a>


        </div>

    )
}

export default Recipe
