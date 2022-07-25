import React from "react";
import CustomBackdrop from "../common/Backdrop";
import CustomCard from "../common/Card";
import CustomLoader from "../common/Loader";
import ObjectView from "../common/ObjectView";
import PropTypes from "prop-types";

/**
 * The LocationInfoModal component displays location details in a modal.
 * The information is displayed through ObjectView component.
 * If there is any error while fetching the data, error message would be displayed.
 */

function LocationInfoModal(props) {
  const { openBackDrop, locDetails, closeModal, loading = false } = props;

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
            <div className="heading">Character Location Information</div>
            {loading && (
              <div className="modal-loader loc-modal-obj-view">
                <CustomLoader size="2.5rem" />
              </div>
            )}
            {!loading && (
              <div className="loc-modal-obj-view">
                {locDetails.length > 0 ? (
                  <ObjectView
                    objs={locDetails}
                    objStyles={{
                      box: { height: "4.5rem" },
                      key: { minWidth: "7.2rem" },
                    }}
                  />
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
LocationInfoModal.propTypes = {
  openBackDrop: PropTypes.bool.isRequired,
  locDetails: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default LocationInfoModal;
