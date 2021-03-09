import React from "react";
import { useSelector } from "react-redux";
import { RootReducerType } from "../../redux/reducers/rootReducer";
import { Toolbar, Typography, AppBar } from "@material-ui/core";

const Header = () => {
  const { count, planetsList } = useSelector(
    (state: RootReducerType) => state.planets
  );

  const pageCount = (count - planetsList.length) / 10;
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">
            {pageCount ? `${pageCount} pages left` : "no more pages"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
