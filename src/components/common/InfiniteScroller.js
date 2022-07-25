import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CustomLoader from "./Loader";
import PropTypes from "prop-types";

/**
 * The InfiniteScroll uses virtual scroll to fetch data based on screen scroll.
 * The getDataAction is an API call function to get the List.
 * children is the child component passed.
 */

function InfiniteScroller(props) {
  const { getDataAction, children } = props;
  const [items, setItems] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [nextExists, setNextExists] = useState(true);

  const loadData = async () => {
    try {
      const { data } = await getDataAction({ pageNo });
      const updatedList = [...items, ...data.results];
      setNextExists(!!data.info.next);
      setItems(updatedList);
      setPageNo(pageNo + 1);
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };

  useEffect(() => {
    loadData();
  }, []);

  const nextPage = () => {
    loadData();
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        pageStart={0}
        next={nextPage}
        hasMore={nextExists}
        loader={
          <div>
            <CustomLoader />
          </div>
        }
        style={{ overflow: "none" }}
        endMessage={<div className="end-of-list">End of List!</div>}>
        <div className="grid-wrapper">
          {items?.map((item, index) => (
            <div key={index} className="card-box">
              {/* We are cloning the child element by passing item to props */}
              {React.cloneElement(children, { item })}
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

InfiniteScroller.propTypes = {
  getDataAction: PropTypes.func,
  children: PropTypes.node,
};

export default InfiniteScroller;
