"use client";

import { useContext, useEffect } from "react";
import { RepoDispatchContext } from "./context";

export const Notifier = ({
  languages,
  children,
  pageCount,
  searchParams,
}: {
  languages: string[];
  children: React.ReactNode;
  pageCount: number;
  searchParams?: { [key: string]: string | string[] };
}) => {
  const dispatch = useContext(RepoDispatchContext)!!;

  useEffect(() => {
    dispatch({ type: "SET_LANGUAGES", languages });
  }, [languages, dispatch]);

  useEffect(() => {
    dispatch({ type: "SET_PAGE_COUNT", count: pageCount });
  }, [pageCount, dispatch]);

  return <>{children}</>;
};
