import React, { useState } from "react";
import CustomCard from "../common/Card";
import ObjectView from "../common/ObjectView";
import { characterFields } from "./config";
import httpMethods from "../httpRequests/index";
import ChapterInfoModal from "./ChapterInfoModal";

function CharacterCard(props) {
  const { item } = props;
  const [chaptersList, setChaptersList] = useState([]);
  const [dispChapters, setDispChapters] = useState(false);
  const [loading,setLoading] = useState(false);

  const viewChapters = () => {
    setLoading(true);
    setDispChapters(true);
    Promise.all(item.episode.map(httpMethods.fetchData))
      .then((allResps) => {
        const chaptersInfo = allResps.map((res) => {
          if (!res.success) return {};
          return {
            name: res.data.name,
            episode: res.data.episode,
            id: res.data.id,
          };
        });
        setChaptersList(chaptersInfo);
        setLoading(false);
      })
      .catch(() => {
        setChaptersList([]);
        setLoading(false);
      });
  };

  const getCardDetails = (character) => {
    return characterFields.map((field) => ({
      key: field.keyLabel,
      value: character[field.key],
    }));
  };

  return (
    <div className="mr-1r">
      <CustomCard
        key={item.id}
        imageUrl={item.image}
        imageAlt={item.name}
        title={item.name}
        rightBtn={{
          required: true,
          onClick: viewChapters,
          label: "View chapters",
        }}
        imgStyle={{ height: "15.65rem" }}
      >
        <ObjectView
          objs={getCardDetails(item)}
          boxStyle={{ height: "4.5rem" }}
        />
      </CustomCard>
      <ChapterInfoModal
        openBackDrop={dispChapters}
        chaptersList={chaptersList}
        closeModal={() => setDispChapters(false)}
        loading={loading}
      />
    </div>
  );
}

export default CharacterCard;
