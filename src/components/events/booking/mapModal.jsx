import React from 'react';
import ReactDOM from 'react-dom';

const MapModal = ({ closeModal, latitude, longitude }) => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=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`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    googleMapsScript.onload = initMap;
    document.head.appendChild(googleMapsScript);

    return () => {
    
      document.head.removeChild(googleMapsScript);
    };
  }, []);

  const initMap = () => {
    const mapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: 14,
    };

    const map = new window.google.maps.Map(mapRef.current, mapOptions);
  
  };

  return ReactDOM.createPortal(
    <div className="map-modal">
      <div className="map-modal-content">
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
        <div className="map" ref={mapRef} />
      </div>
    </div>,
    document.body
  );
};

export default MapModal;
