export const toggleBodyClassHandler = (className: string) => {
  if (document.body.classList.contains(className)) {
    document.body.classList.remove(className);
  } else {
    document.body.classList.add(className);
  }
};

export const removeBodyClassHandler = (className: string) => {
  if (document.body.classList.contains(className)) {
    document.body.classList.remove(className);
  }
};
