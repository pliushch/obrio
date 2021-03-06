import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { Toolbar, Typography, AppBar } from "@material-ui/core";

const Header = () => {
  const { count, planetsList } = useSelector(
    (state: RootState) => state.planets
  );

  const pageCount = (count - planetsList.length) / 10;
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">
            {pageCount ? `${pageCount} pages left` : null}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
