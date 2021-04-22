import React from 'react'
import CharacterCard from './CharacterCard'

const Characters = ({ items, isLoading }) => {
    return isLoading ? ( <h1>Loading..</h1> ) : 
        (<section className="cards">
            {items.map((item, key) => (
                <CharacterCard key={key} item={item}> </CharacterCard>
            ))}
            
        </section>)
}

export default Characters
