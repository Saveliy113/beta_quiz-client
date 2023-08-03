export const getUrlPage = (
  urlPageParam: string | null
): { urlPage: number } => {
  const urlPage = urlPageParam ? +urlPageParam : 1;

  return { urlPage };
};
