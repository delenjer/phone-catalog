import React from 'react';

export const BackPath = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="path">
      <img src="./img/icons/back.svg" alt="Back" className="path__icon" />

      <button
        className="path__back"
        type="button"
        onClick={handleBack}
      >
        Back
      </button>
    </div>
  );
};
