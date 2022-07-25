import React from "react";
import CharacterCard from "../Character/CharacterCard";
import InfiniteScroller from "../common/InfiniteScroller";
import { getCharactersAPI } from "../httpRequests/characters";
import Header from "../common/Header";

/**
 * Home page contains a Header component.
 * getCharactersAPI method is passed to InfiniteScroller to get list of characters.
 * Character card displays each character information.
 */

function Home() {
  return (
    <div>
      <Header />
      <InfiniteScroller getDataAction={getCharactersAPI}>
        <CharacterCard />
      </InfiniteScroller>
    </div>
  );
}

export default Home;
