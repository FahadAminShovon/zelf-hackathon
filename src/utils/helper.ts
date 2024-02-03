export function formatNumber(num: number | string): string {
  const numValue = typeof num === 'string' ? parseFloat(num) : num;

  if (numValue < 1000) {
    return numValue.toString();
  } else if (numValue < 1000000) {
    return (numValue / 1000).toFixed(1) + 'k';
  } else {
    return (numValue / 1000000).toFixed(1) + 'M';
  }
}

export function formatDate(timestamp: string): string {
  const date = new Date(timestamp);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const monthIndex = date.getMonth();
  const day = date.getDate().toString().padStart(2, '0');

  return `${monthNames[monthIndex]} ${day}`;
}

// Example usage:
const formattedDate = formatDate('2023-05-04T21:16:55Z');
console.log(formattedDate); // Output: "May 04"
