import React from "react";
import CharacterCard from "../Character/CharacterCard";
import InfiniteScroller from "../common/InfiniteScroller";
import { getCharactersAPI } from "../httpRequests/characters";
import Header from "../common/Header";

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
