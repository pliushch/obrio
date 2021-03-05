import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPlanets} from "../../redux/actions/planets";
import {RootState} from "../../redux/reducers/rootReducer";

const PlanetsList = () => {
    const {loading, error, planetsList, next} = useSelector(
        (state: RootState) => state.planets
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPlanets());
    }, [dispatch]);

    console.log(planetsList);

    const handleClick = () => {
        if (!next) return false;
        dispatch(fetchPlanets(next));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <div>
            {planetsList.map((item: {url: string, name: string, climate: string, population: string}) => (
                <div key={item.url}>
                    <p>{item.name}</p>
                    <p>{item.climate}</p>
                    <p>{item.population}</p>
                </div>
            ))}
            {next && (
                <button
                    type="button"
                    onClick={handleClick}
                >
                    Load more
                </button>
            )}
        </div>
    );
};

export default PlanetsList;
