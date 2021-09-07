const ID_COOKIE_KEY = "nonalcholic";

export const getIdCookie = () => {
  let matches = document.cookie.match(
    new RegExp("(?:^|; )" + ID_COOKIE_KEY + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : "error";
};

export const setIdCookie = (cookieValue: string) => {
  document.cookie = ID_COOKIE_KEY + "=" + cookieValue + "; path=/;";
};
