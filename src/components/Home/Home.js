import { useCallback, useEffect, useState } from "react";
import constants from "../../system/constant";
import CommonCard from "../common/Card";
import ObjectView from "../common/ObjectView";
import { getCharactersAPI } from "../httpRequests/characters";

const { characterFields } = constants;

function Home() {
  const [characterList, setCharacterList] = useState([]);
  const getCharacters = useCallback(async () => {
    try {
      const { data } = await getCharactersAPI();
      setCharacterList(data.results);
    } catch (error) {}
  }, []);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const getCardDetails = (character) => {
    return characterFields.map((field) => ({
      key: field,
      value: character[field],
    }));
  };

  return (
    <div>
      {characterList.map((character) => (
        <CommonCard
          key={character.id}
          imageUrl={character.image}
          imageAlt={character.name}
          title={character.name}
        >
          <ObjectView objs={getCardDetails(character)} />
        </CommonCard>
      ))}
    </div>
  );
}

export default Home;
