export function toggleBodyClassHandler(className: string) {
  if (document.body.classList.contains(className)) {
    document.body.classList.remove(className);
  } else {
    document.body.classList.add(className);
  }
};

export function removeBodyClassHandler(className: string) {
  if (document.body.classList.contains(className)) {
    document.body.classList.remove(className);
  }
};
