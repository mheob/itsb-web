export function age(birthday: Date) {
  const ageDate = new Date(Date.now() - birthday.getTime());
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
