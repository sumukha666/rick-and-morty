import React from "react";
import CharacterCard from "../Character/CharacterCard";
import InfiniteScroller from "../common/InfiniteScroller";
import { getCharactersAPI } from "../httpRequests/characters";

function Home() {
  return (
    <div>
      <InfiniteScroller getDataAction={getCharactersAPI}>
        <CharacterCard />
      </InfiniteScroller>
    </div>
  );
}

export default Home;
