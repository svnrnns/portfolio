export function dateToMonthYearString(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options).replace(', ', ' - ');
}
