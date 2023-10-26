import { useSelector } from 'react-redux';
import { characters } from './chracatersSlice';

const Characters = () => {
    const chars = useSelector(characters);

    return (
        <div>
            {chars &&
                chars.map((character) => (
                    <div>
                        <p>
                            {character.name} - {character.birth_year} -{' '}
                            {character.gender}
                        </p>
                    </div>
                ))}
        </div>
    );
};

export default Characters;
