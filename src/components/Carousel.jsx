import React, { useState } from 'react'; // Import React and useState hook
import { Modal } from 'react-bootstrap'; // Import Modal component from react-bootstrap

const Carousels = () => {
  // State to control the visibility of the modal
  const [modalShow, setModalShow] = useState(false);

  // State to keep track of the currently selected image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images to display in the carousel
  const images = [
    { src: 'https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300' },
    { src: 'https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300' },
    { src: 'https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300' },
    { src: 'https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300' },
    { src: 'https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300' }
    // Add more images as needed
  ];

  // Function to handle when an image is clicked
  const handleImageClick = (index) => {
    setCurrentIndex(index); // Set the current image index
    setModalShow(true);     // Show the modal
  };

  return (
    <>
      {/* Container for the carousel */}
      <div className="carousel-container col" data-bs-theme='dark'>
        <div className="scroll-wrapper">
          <div className="carousel-items imgheight">
            {/* Map over the images array to display each image */}
            {images && images.map((image, index) => (
              <img 
                className='imgheight mx-2' 
                key={index} 
                src={image.src} 
                alt="carousel-img" 
                onClick={() => handleImageClick(index)} // Show modal on image click
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal to display the image carousel in larger view */}
      <Modal
        show={modalShow} // Control visibility with state
        onHide={() => setModalShow(false)} // Close modal on hide
        size="lg" // Large modal size
        centered // Center the modal
        dialogClassName="modal-90w" // Custom class for width
      >
        <Modal.Header closeButton /> {/* Close button on modal */}
        <Modal.Body className="horizontal-scroll">
          <div className="horizontal-scroll-container">
            {/* Map over the images array to display each image inside the modal */}
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Slide ${index + 1}`} // Alt text for accessibility
                className={`modal-image ${index === currentIndex ? 'active' : ''}`} // Highlight current image
              />
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Carousels; // Export the Carousels component
