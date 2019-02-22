export const getCookie = () => {
  const stringCookie = localStorage.getItem('userCookie');
  return stringCookie ? JSON.parse(stringCookie) : {}
}
