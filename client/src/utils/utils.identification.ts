const ID_COOKIE_KEY = "nonalcholic/id";
const IP_COOKIE_KEY = "nonalcholic/ip";

export const getIdCookie = () => {
  let matches = document.cookie.match(
    new RegExp("(?:^|; )" + ID_COOKIE_KEY + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : "error";
};

export const setIdCookie = (cookieValue: string) => {
  document.cookie = ID_COOKIE_KEY + "=" + cookieValue + "; path=/;";
};

export const getIpCookie = () => {
  let matches = document.cookie.match(
    new RegExp("(?:^|; )" + IP_COOKIE_KEY + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : "error";
};

export const setIpCookie = (cookieValue: string) => {
  document.cookie = IP_COOKIE_KEY + "=" + cookieValue + "; path=/;";
};
