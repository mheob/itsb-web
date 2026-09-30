/**
 * Toggles a class on the body element.
 *
 * @param className - The class to toggle.
 *
 * @example
 * toggleBodyClassHandler('dark-mode');
 */
export function toggleBodyClassHandler(className: string): void {
	document.body.classList.toggle(className, !document.body.classList.contains(className));
}

/**
 * Removes a class from the body element.
 *
 * @param className - The class to remove.
 *
 * @example
 * removeBodyClassHandler('dark-mode');
 */
export function removeBodyClassHandler(className: string): void {
	if (document.body.classList.contains(className)) {
		document.body.classList.remove(className);
	}
}
