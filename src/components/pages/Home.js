import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/User";

export const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};
