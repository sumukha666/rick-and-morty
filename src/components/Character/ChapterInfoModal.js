import React from "react";
import CustomBackdrop from "../common/Backdrop";
import CustomCard from "../common/Card";
import CustomLoader from "../common/Loader";
import CustomTable from "../common/Table";
import { chapterInfoTableHeader } from "./config";

function ChapterInfoModal(props) {
  const { openBackDrop, chaptersList, closeModal, loading = false } = props;

  return (
    <div>
      <CustomBackdrop open={openBackDrop}>
        <div className="modal-card" style={{ minWidth: "50vw" }}>
          <CustomCard
            rightBtn={{
              required: true,
              onClick: closeModal,
              label: "Close",
            }}
          >
            <div className="heading">Character seen in chapters</div>
            {loading && (
              <div className="chapter-modal-loader">
                <CustomLoader size="2.5rem" />
              </div>
            )}
            {!loading && (
              <div className="chapter-modal-table">
                {chaptersList.length > 0 ? (
                  <CustomTable
                    rows={chaptersList}
                    tableHeader={chapterInfoTableHeader}
                  />
                ) : (
                  <div>
                    Unable to fetch the details. Please try again after sometime
                  </div>
                )}
              </div>
            )}
          </CustomCard>
        </div>
      </CustomBackdrop>
    </div>
  );
}

export default ChapterInfoModal;
