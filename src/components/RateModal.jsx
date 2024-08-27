import React, { useState } from "react";

function RateModal({ show, handleClose }) {
  // State to store the selected emoji for each category
  const [ratings, setRatings] = useState({
    cleanliness: null,
    services: null,
    staff: null,
  });

  // Function to handle emoji click
  const handleEmojiClick = (category, rating) => {
    setRatings({
      ...ratings,
      [category]: rating,
    });
  };

  // Function to get the appropriate emoji class based on selection
  const getEmojiClass = (category, rating) => {
    switch (rating) {
      case 1:
        return ratings[category] === 1
          ? "bi-emoji-frown-fill"
          : "bi-emoji-frown";
      case 2:
        return ratings[category] === 2
          ? "bi-emoji-neutral-fill"
          : "bi-emoji-neutral";
      case 3:
        return ratings[category] === 3
          ? "bi-emoji-smile-fill"
          : "bi-emoji-smile";
      default:
        return "";
    }
  };

  // Function to handle form submission
  const handleSubmit = () => {
    console.log("Submitted Ratings:", ratings);
    setRatings({
      cleanliness: null,
      services: null,
      staff: null,
    });
    handleClose(); // Close the modal
  };

  return (
    <div
      className={`modal ${show ? "show" : ""} `}
      style={{ display: show ? "block" : "none" }}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Rate</h5>
            <button
              type="button"
              className="btn-close mx-2"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="text-center">
              <h5 className="fw-semibold">SHREE HEMKUNT TYRES AND SERVICES</h5>
              <img
                src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
                alt="Dealer"
                className="img-fluid mb-3"
              />
            </div>

            {/* Cleanliness */}
            <div className="d-flex justify-content-between align-items-center">
              <p>Cleanliness</p>
              <div className="d-flex justify-content-around w-50">
                <span
                  onClick={() => handleEmojiClick("cleanliness", 1)}
                  style={{ cursor: "pointer" }}
                >
                  <i className={`bi ${getEmojiClass("cleanliness", 1)}`}></i>
                </span>
                <span
                  onClick={() => handleEmojiClick("cleanliness", 2)}
                  style={{ cursor: "pointer" }}
                >
                  <i className={`bi ${getEmojiClass("cleanliness", 2)}`}></i>
                </span>
                <span
                  onClick={() => handleEmojiClick("cleanliness", 3)}
                  style={{ cursor: "pointer" }}
                >
                  <i className={`bi ${getEmojiClass("cleanliness", 3)}`}></i>
                </span>
              </div>
            </div>

            {/* Services */}
            <div className="d-flex justify-content-between align-items-center">
              <p>Services</p>
              <div className="d-flex justify-content-around w-50">
                <span
                  onClick={() => handleEmojiClick("services", 1)}
                  style={{ cursor: "pointer" }}
                >
                  <i className={`bi ${getEmojiClass("services", 1)}`}></i>
                </span>
                <span
                  onClick={() => handleEmojiClick("services", 2)}
                  style={{ cursor: "pointer" }}
                >
                  <i className={`bi ${getEmojiClass("services", 2)}`}></i>
                </span>
                <span
                  onClick={() => handleEmojiClick("services", 3)}
                  style={{ cursor: "pointer" }}
                >
                  <i className={`bi ${getEmojiClass("services", 3)}`}></i>
                </span>
              </div>
            </div>

            {/* Staff */}
            <div className="d-flex justify-content-between align-items-center">
              <p>Staff</p>
              <div className="d-flex justify-content-around w-50">
                <span
                  onClick={() => handleEmojiClick("staff", 1)}
                  style={{ cursor: "pointer" }}
                >
                  <i className={`bi ${getEmojiClass("staff", 1)}`}></i>
                </span>
                <span
                  onClick={() => handleEmojiClick("staff", 2)}
                  style={{ cursor: "pointer" }}
                >
                  <i className={`bi ${getEmojiClass("staff", 2)}`}></i>
                </span>
                <span
                  onClick={() => handleEmojiClick("staff", 3)}
                  style={{ cursor: "pointer" }}
                >
                  <i className={`bi ${getEmojiClass("staff", 3)}`}></i>
                </span>
              </div>
            </div>

            <div className="form-group mt-3">
              <textarea
                className="form-control sm"
                id="review"
                rows="3"
                placeholder="Share your experience about this dealer"
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleSubmit}
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RateModal;
