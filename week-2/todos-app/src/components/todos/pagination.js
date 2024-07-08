"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";
import styles from "./style.module.css";

export default function Pagination({ pageCount }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSelectChange = (e) => {
    router.push(`${pathname}?${createQueryString("page", e.target.value)}`);
  };

  const getCurrentPage = () => {
    const page = parseInt(searchParams.get("page"));
    if (isNaN(page)) {
      return 1;
    }
    return page;
  };

  const getNextPage = () => {
    const currentPage = getCurrentPage();
    return currentPage + 1 > pageCount ? pageCount : currentPage + 1;
  };

  const getPrevPage = () => {
    const currentPage = getCurrentPage();
    return currentPage - 1 < 1 ? 1 : currentPage - 1;
  };

  const handleNextButtonClick = () => {
    router.push(`${pathname}?${createQueryString("page", getNextPage())}`);
  };

  const handlePrevButtonClick = () => {
    router.push(`${pathname}?${createQueryString("page", getPrevPage())}`);
  };
  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.pagination}>
        <button
          onClick={handlePrevButtonClick}
          disabled={getCurrentPage() - 1 < 1}
        >
          &laquo; Prev
        </button>
        <span>
          <select value={getCurrentPage()} onChange={handleSelectChange}>
            {new Array(pageCount).fill(0).map((_, index) => {
              return (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              );
            })}
          </select>
          /{pageCount}
        </span>
        <button
          onClick={handleNextButtonClick}
          disabled={getCurrentPage() + 1 > pageCount}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
}
