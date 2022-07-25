import React from "react";
import CustomBackdrop from "../common/Backdrop";
import CustomCard from "../common/Card";
import CustomLoader from "../common/Loader";
import CustomTable from "../common/Table";
import { chapterInfoTableHeader } from "./config";
import PropTypes from "prop-types";

/**
 * The ChapterInfoModal component displays chapters in which character exists.
 * The chapters list is displayed through Table component.
 * If there is any error while fetching the data, error message would be displayed.
 */

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
            }}>
            <div className="heading">Character seen in chapters</div>
            {loading && (
              <div className="modal-loader chapter-modal-content">
                <CustomLoader size="2.5rem" />
              </div>
            )}
            {!loading && (
              <div className="chapter-modal-content">
                {chaptersList.length > 0 ? (
                  <CustomTable rows={chaptersList} tableHeader={chapterInfoTableHeader} />
                ) : (
                  <div>Unable to fetch the details. Please try again after sometime</div>
                )}
              </div>
            )}
          </CustomCard>
        </div>
      </CustomBackdrop>
    </div>
  );
}

// Validating the props type
ChapterInfoModal.propTypes = {
  openBackDrop: PropTypes.bool.isRequired,
  chaptersList: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default ChapterInfoModal;
