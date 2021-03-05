import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/reducers/rootReducer";

const Header = () => {
    const {
        count,
        planetsList
    } = useSelector((state: RootState) => state.planets)

    const pageCount = (count - planetsList.length) / 10
    return (
        <div>
            {pageCount ? `${pageCount} pages left` : null}
        </div>
    )
}

export default Header;
