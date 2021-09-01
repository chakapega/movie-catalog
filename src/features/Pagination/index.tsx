import React from "react";
import BootstrapPagination from "react-bootstrap/Pagination";
import { useTranslation } from "react-i18next";
import { PAGE_NUMBER_ONE } from "constants/common";

import { PaginationProps } from "./types";

export const Pagination: React.FC<PaginationProps> = ({ page, totalPages, changePage }) => {
  const { t } = useTranslation();

  return (
    <BootstrapPagination className='m-3'>
      <BootstrapPagination.First
        disabled={page === PAGE_NUMBER_ONE}
        onClick={() => changePage(PAGE_NUMBER_ONE)}
      />
      <BootstrapPagination.Prev
        disabled={page === PAGE_NUMBER_ONE}
        onClick={() => changePage(page - PAGE_NUMBER_ONE)}
      />
      <span className='pagination-indicator'>{t("paginationIndicator", { page, totalPages })}</span>
      <BootstrapPagination.Next
        disabled={page === totalPages}
        onClick={() => changePage(page + PAGE_NUMBER_ONE)}
      />
      <BootstrapPagination.Last disabled={page === totalPages} onClick={() => changePage(totalPages)} />
    </BootstrapPagination>
  );
};
