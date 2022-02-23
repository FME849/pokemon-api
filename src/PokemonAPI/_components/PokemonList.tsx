import React from 'react';
import './pokemon.css';

interface Props {
    id: number,
    name: string,
    image: string
}

const PokemonList = (props: Props) => {
    const { id, name, image } = props;
    return (
        <div className=''>
            <section className='pokemon-list-container'>
                <p className='pokemon-name'>{name}</p>
                <img src={image} alt='' />
            </section>
        </div>
    )
}

export default PokemonList