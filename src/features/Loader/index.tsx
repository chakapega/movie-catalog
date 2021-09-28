import React from "react";
import { Spinner } from "react-bootstrap";

export const Loader: React.FC<{ isFullScreen?: boolean }> = ({ isFullScreen }) => (
  <div className={isFullScreen ? "spinner-container" : ""}>
    <Spinner animation="border" />
  </div>
);
