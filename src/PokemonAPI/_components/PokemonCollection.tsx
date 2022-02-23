import React, { useState } from 'react';
import { Pokemon } from '../interface';
import PokemonList from './PokemonList';
import PokemonModal from './PokemonModal';
import './pokemon.css';

interface Props {
    pokemons: Pokemon[],
    modalOpened: boolean,
    setModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const PokemonCollection = (props: Props) => {
    const { pokemons, modalOpened, setModalOpened } = props;

    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>({
        id: 0,
        name: '',
        sprites: {
            front_default: '',
        },
        abilities: [],
    })

    const selectPokemon = (pokemon: Pokemon) => {
        setSelectedPokemon(pokemon);
        setModalOpened(true);
    }

    const handleClose = () => {
        setModalOpened(false);
        console.log(modalOpened);
    }

    if (modalOpened) return <PokemonModal
        id={selectedPokemon.id}
        name={selectedPokemon.name}
        sprites={selectedPokemon.sprites}
        abilities={selectedPokemon.abilities}
        closeDetail={handleClose}
    />
    return (
        <div>
            <section className='collection-container'>
                {pokemons.map((pokemon) => {
                    return (
                        <div className='' onClick={() => selectPokemon(pokemon)}>
                            <PokemonList
                                key={pokemon.id}
                                id={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.sprites.front_default}
                            />
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default PokemonCollection