"use client";

import { Dropdown } from "@/util/dropdown";

export const RepositoryListLanguageFilter = ({
  languages,
}: {
  languages: (string | null)[];
}) => {
  const text = "Language";

  return (
    <Dropdown
      text={text}
      options={languages.map((language) => ({
        element: <>{language}</>,
        value: language,
      }))}
      onSelect={(language) => {
        console.log(language);
      }}
    />
  );
};
