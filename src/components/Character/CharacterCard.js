import React from "react";
import CommonCard from "../common/Card";
import ObjectView from "../common/ObjectView";
import { characterFields } from "./config";

function CharacterCard(props) {
  const { item } = props;

  const getCardDetails = (character) => {
    return characterFields.map((field) => ({
      key: field.keyLabel,
      value: character[field.key],
    }));
  };

  return (
    <div>
      <CommonCard
        key={item.id}
        imageUrl={item.image}
        imageAlt={item.name}
        title={item.name}
      >
        <ObjectView objs={getCardDetails(item)} />
      </CommonCard>
    </div>
  );
}

export default CharacterCard;
