import React from "react";
import BootstrapSpinner from "react-bootstrap/Spinner";

import { useAppSelector } from "hooks";

export const Spinner = () => {
  const isShowSpinner = useAppSelector((state) => state.spinner.isShowSpinner);

  return isShowSpinner ? (
    <div className="spinner-container">
      <BootstrapSpinner animation="border" variant="primary" />
    </div>
  ) : null;
};
