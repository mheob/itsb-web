const EPOCH_YEAR = 1970;

/**
 * Calculates the age in years based on the given birthday.
 *
 * @param birthday - The date of birth as a Date object.
 * @returns The calculated age as a number.
 *
 * @example
 * const birthday = new Date('1990-01-01');
 * const age = getAge(birthday); // e.g., 34
 */
export function getAge(birthday: Date): number {
	const ageDate = new Date(Date.now() - birthday.getTime());
	return Math.abs(ageDate.getUTCFullYear() - EPOCH_YEAR);
}
