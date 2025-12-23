export const sanitize = (input: string) => {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&grave;",
    "/": "&#x2F;",
  };
  const reg = /[&<>"'`/]/gi;
  return input.replace(reg, (match) => map[match]);
};
