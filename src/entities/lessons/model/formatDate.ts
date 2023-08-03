export const formatDate = (date: string | null) => {
  let localeDate: string;

  if (date) {
    localeDate = new Date(date).toLocaleDateString();
  } else {
    localeDate = new Date().toLocaleDateString();
  }

  return `${localeDate.slice(0, 2)}-${localeDate.slice(
    3,
    5
  )}-${localeDate.slice(6, 11)}`;
};
