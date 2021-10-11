import React from "react";
import BootstrapSpinner from "react-bootstrap/Spinner";

import { useAppSelector } from "store/hooks";

export const Spinner = () => {
  const { isShow } = useAppSelector((state) => state.spinner);

  return isShow ? (
    <div className="spinner-container">
      <BootstrapSpinner animation="border" variant="primary" />
    </div>
  ) : null;
};
