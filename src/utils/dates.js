/**
 * Returns the number of full years between a past date and today.
 */
export function yearsFrom(dateString) {
  const start = new Date(dateString);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const monthDiff = now.getMonth() - start.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
    years--;
  }
  return years;
}

/**
 * Returns a human-friendly age string like "2 years 7 months" or "11 months".
 */
export function ageString(dateString) {
  const start = new Date(dateString);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) { years--; months += 12; }
  if (now.getDate() < start.getDate()) { months--; }
  if (months < 0) { years--; months += 12; }

  if (years === 0) return `${months} month${months !== 1 ? 's' : ''}`;
  if (months === 0) return `${years} year${years !== 1 ? 's' : ''}`;
  return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
}

/**
 * Returns a poetic string for years of experience.
 * e.g. 15 → "a decade and a half", 20 → "two decades", 16 → "over a decade and a half"
 */
export function poeticExperience(dateString) {
  const yrs = yearsFrom(dateString);
  if (yrs < 10)  return `${yrs} years`;
  if (yrs === 10) return 'a decade';
  if (yrs < 15)  return `over a decade`;
  if (yrs === 15) return 'a decade and a half';
  if (yrs < 20)  return 'over a decade and a half';
  if (yrs === 20) return 'two decades';
  return 'over two decades';
}

// Key dates
export const CAREER_START   = '2010-10-22';  // 22 Oct 2010
export const DAUGHTER_BORN  = '2023-11-21';  // 21 Nov 2023
