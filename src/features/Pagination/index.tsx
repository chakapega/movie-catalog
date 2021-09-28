import React from "react";
import BootstrapPagination from "react-bootstrap/Pagination";
import { useTranslation } from "react-i18next";
import { FIRST_PAGE } from "constants/common";

import { PaginationProps } from "./types";

export const Pagination: React.FC<PaginationProps> = ({ page, totalPages, changePage }) => {
  const { t } = useTranslation();

  return (
    <BootstrapPagination className="m-3">
      <BootstrapPagination.First disabled={page === FIRST_PAGE} onClick={() => changePage(FIRST_PAGE)} />
      <BootstrapPagination.Prev disabled={page === FIRST_PAGE} onClick={() => changePage(page - FIRST_PAGE)} />
      <span className="pagination-indicator">{t("paginationIndicator", { page, totalPages })}</span>
      <BootstrapPagination.Next disabled={page === totalPages} onClick={() => changePage(page + FIRST_PAGE)} />
      <BootstrapPagination.Last disabled={page === totalPages} onClick={() => changePage(totalPages)} />
    </BootstrapPagination>
  );
};
