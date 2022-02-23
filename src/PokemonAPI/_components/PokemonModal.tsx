import React from 'react';
import { Pokemon } from '../interface';

interface Props extends Pokemon {
    closeDetail: () => void;
}


const PokemonModal = (props: Props) => {
    const { name, sprites, abilities, closeDetail } = props;
    const image = sprites.front_default;

    return (
        <section className="pokemon-list-detailed">
            <div className="detail-container">
                <p className="detail-close"
                    onClick={closeDetail}
                >
                    X
                </p>
                <div className="detail-info">
                    <img src={image} alt="pokemon" className="detail-img" />
                    <p className="detail-name"> {name}</p>
                </div>
                <div className="detail-skill">
                    <p className="detail-ability"> Ablities: </p>
                    {abilities?.map((ab: any) => {
                        return <div className=""> {ab.ability.name}</div>;
                    })}
                </div>
            </div>
        </section>
    )
}

export default PokemonModal