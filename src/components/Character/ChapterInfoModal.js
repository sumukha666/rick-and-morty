import React from "react";
import CustomBackdrop from "../common/Backdrop";
import CustomCard from "../common/Card";
import CustomTable from "../common/Table";
import { chapterInfoTableHeader } from "./config";

function ChapterInfoModal(props) {
  const { openBackDrop, chaptersList, closeModal } = props;

  return (
    <div>
      <CustomBackdrop open={openBackDrop}>
        <div className="modal-card">
          <CustomCard
            rightBtn={{
              required: true,
              onClick: closeModal,
              label: "Close",
            }}
          >
            <div>
              <div className="heading">Character seen in chapters</div>
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
          </CustomCard>
        </div>
      </CustomBackdrop>
    </div>
  );
}

export default ChapterInfoModal;
