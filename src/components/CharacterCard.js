import React from 'react'

const CharacterCard = ({ item }) => {
    return (
        <div className="card">
            {item.name}
            <img src={item.image.medium} alt=""/>
        </div>
    )
}

export default CharacterCard
