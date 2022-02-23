import React from 'react';
import './Pokemon.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import PokemonCollection from './_components/PokemonCollection';
import { Pokemons, Pokemon } from './interface';

function PokemonProject() {
    const [pokemons, setPokemon] = useState<Pokemon[]>([]);
    const [nextUrl, setNextUrl] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [modalOpened, setModalOpened] = useState<boolean>(false)

    const getPokemonDetail = (res: any) => {
        res.data.results.forEach(async (pokemon: Pokemons) => {
            const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            setPokemon((p) => [...p, poke.data])
        });
        setLoading(false);
    }

    useEffect(() => {
        const getPokemon = async () => {
            setLoading(true)
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20");
            setNextUrl(res.data.next);
            getPokemonDetail(res);
        }
        getPokemon();
    }, [])

    const nextPage = async () => {
        setLoading(true);
        let res = await axios.get(nextUrl);
        setNextUrl(res.data.next);
        getPokemonDetail(res);
    }
    return (
        <div className='App'>
            <div className='container'>
                <header className='pokemon-header'>
                    Pokemon
                </header>
                <PokemonCollection pokemons={pokemons} modalOpened={modalOpened} setModalOpened={setModalOpened} />
                <div className='btn' style={!modalOpened ? ({ display: '' }) : ({ display: 'none' })}>
                    <button onClick={nextPage}>
                        {loading ? 'Loading...' : 'Load more'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PokemonProject