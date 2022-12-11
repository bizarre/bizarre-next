"use client";

import { useContext, useEffect, useTransition } from "react";
import { RepoDispatchContext } from "./context";

export const Notifier = ({
  languages,
  children,
  pageCount,
}: {
  languages: string[];
  children: React.ReactNode;
  pageCount: number;
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
