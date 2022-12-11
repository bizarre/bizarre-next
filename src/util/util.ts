export const getChainedURLSearchParams = (
  searchParams:
    | {
        [key: string]: string | string[];
      }
    | URLSearchParams
): URLSearchParams => {
  const params = new URLSearchParams(
    searchParams.constructor === URLSearchParams
      ? searchParams
      : Object.entries(searchParams).map(
          ([k, v]) => [k, [v].flat()] as string[]
        )
  );

  Object.keys(searchParams).forEach((k) => {
    const value =
      searchParams.constructor === URLSearchParams
        ? searchParams.getAll(k)
        : (searchParams as { [key: string]: string | string[] })[k];

    if (Array.isArray(value)) {
      params.delete(k);

      value.forEach((v) => {
        params.append(k, v);
      });
    }
  });

  return params;
};
