import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.style";

const WithSpinner = (WrapperComponent) => {
  // HOC: Higher Order Component
  const Spinner = ({ isLoading, ...otherPrpops }) => {
    return isLoading ? ( // check if props contains 'isLoading', if so, render spinner, if not, render actual component
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherPrpops} />
    );
  };
  return Spinner;
};

export default WithSpinner;
