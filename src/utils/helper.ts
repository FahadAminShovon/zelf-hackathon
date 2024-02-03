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

interface EngagementProps {
  totalEngagement: string | number;
  totalFollowers: string | number;
}

export function calculateEngagementRate({
  totalEngagement,
  totalFollowers,
}: EngagementProps): string {
  const engagement =
    typeof totalEngagement === 'string'
      ? parseFloat(totalEngagement)
      : totalEngagement;
  const followers =
    typeof totalFollowers === 'string'
      ? parseFloat(totalFollowers)
      : totalFollowers;

  if (followers === 0) {
    return '0%'; // To avoid division by zero
  }

  const engagementRate = (engagement / followers) * 100;
  return engagementRate.toFixed(2) + '%';
}

export function truncateSentence(sentence: string): string {
  if (sentence.length > 20) {
    const truncatedSentence = sentence.substring(0, 20).trim() + '...';
    return truncatedSentence;
  } else {
    return sentence;
  }
}
