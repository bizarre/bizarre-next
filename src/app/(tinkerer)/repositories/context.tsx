"use client";

import { createContext, Dispatch, useReducer } from "react";

type State = {
  languages: string[];
  pageCount: number;
};

type Action =
  | { type: "SET_LANGUAGES"; languages: string[] }
  | { type: "SET_PAGE_COUNT"; count: number };

export const RepoContext = createContext<State | null>(null);
export const RepoDispatchContext = createContext<Dispatch<Action> | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_LANGUAGES":
      return { ...state, languages: action.languages };
    case "SET_PAGE_COUNT":
      return { ...state, pageCount: action.count };
  }
};

export const RepositoryContextWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, {
    languages: [],
    pageCount: 0,
  });

  return (
    <RepoContext.Provider value={state}>
      <RepoDispatchContext.Provider value={dispatch}>
        {children}
      </RepoDispatchContext.Provider>
    </RepoContext.Provider>
  );
};
