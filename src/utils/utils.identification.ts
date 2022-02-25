const IP_COOKIE_KEY = "nonalcholic/ip";

export const getIpCookie = () => {
  let matches = document.cookie.match(
    new RegExp("(?:^|; )" + IP_COOKIE_KEY + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : "error";
};

export const setIpCookie = (cookieValue: string) => {
  document.cookie = IP_COOKIE_KEY + "=" + cookieValue + "; path=/;";
};
