import React, { useState } from "react";
import CustomCard from "../common/Card";
import ObjectView from "../common/ObjectView";
import { characterFields, locationInfo } from "./config";
import httpMethods from "../httpRequests/index";
import ChapterInfoModal from "./ChapterInfoModal";
import LocationInfoModal from "./LocationInfoModal";
import { getLocationInfoAPI } from "../httpRequests/location";
import PropTypes from "prop-types";

/**
 * This Component contains the card that is rendered on home page.
 * The card containing character details is displayed (image, name, gender ..etc)
 * Contains location info and view chapters actions
 */

function CharacterCard(props) {
  const { item } = props;
  const [chaptersList, setChaptersList] = useState([]);
  const [dispChapters, setDispChapters] = useState(false);
  const [loading, setLoading] = useState(false);

  const [dispLocInfo, setDispLocInfo] = useState(false);
  const [locDetails, setLocDetails] = useState([]);
  const [locInfoLoader, setLocInfoLoader] = useState(false);

  // Promise.all method to get all chapter details from the list of urls
  const viewChapters = () => {
    setLoading(true);
    setDispChapters(true);
    setChaptersList([]);
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
        setLoading(false);
      });
  };

  // Get API call to fetch the location details
  const viewLocationInfo = async () => {
    setLocInfoLoader(true);
    setLocDetails([]);
    setDispLocInfo(true);
    try {
      const { data } = await getLocationInfoAPI({ id: item.id });
      const locationDetails = locationInfo.map((field) => ({
        key: field.keyLabel,
        value: field.format ? field.format(data[field.key]) : data[field.key],
      }));
      setLocDetails(locationDetails);
      setLocInfoLoader(false);
    } catch (error) {
      setLocInfoLoader(false);
    }
  };

  // Formatting the required fields from the each character object
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
        leftBtn={{
          required: true,
          onClick: viewLocationInfo,
          label: "Location info",
        }}
        rightBtn={{
          required: true,
          onClick: viewChapters,
          label: "View chapters",
        }}
        imgStyle={{ height: "15.65rem" }}>
        <ObjectView
          objs={getCardDetails(item)}
          objStyles={{ box: { height: "4.5rem" }, key: { minWidth: "3.5rem" } }}
        />
      </CustomCard>
      <ChapterInfoModal
        openBackDrop={dispChapters}
        chaptersList={chaptersList}
        closeModal={() => setDispChapters(false)}
        loading={loading}
      />
      <LocationInfoModal
        openBackDrop={dispLocInfo}
        locDetails={locDetails}
        closeModal={() => setDispLocInfo(false)}
        loading={locInfoLoader}
      />
    </div>
  );
}

// Validating the props type
CharacterCard.propTypes = {
  item: PropTypes.object,
};

export default CharacterCard;
