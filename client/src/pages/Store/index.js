import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import fakeData from '../../components/fakeData';
import AlcoholList from './components/AlcoholList';


function Store ({ drinks }) {
  return (
    <div>
      <h1>The Store</h1>
      <Link
        to={{
          pathname: "/order",
          // search: "?sort=name",
          // hash: "#the-hash",
          state: fakeData.drinks,
        }}
      >Shopping Bag </Link>
      <AlcoholList drinks={fakeData.drinks} />
    </div>
  );
}

export default withRouter(Store);
