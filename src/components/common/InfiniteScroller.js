import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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
        loader={<h4>Loading...</h4>}
      >
        <div className="grid-wrapper">
          {items?.map((item, index) => (
            <div key={index} className="card-box">
              {React.cloneElement(children, { item })}
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default InfiniteScroller;
