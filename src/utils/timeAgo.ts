export function timeAgo(dateString: string): string {
  const now = new Date().getTime();
  const created = new Date(dateString).getTime();
  const diffInSeconds = Math.floor((now - created) / 1000);

  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(diffInSeconds / 3600);
  const days = Math.floor(diffInSeconds / 86400);

  if (days > 0) {
    return `${days} days ago`;
  }

  if (hours > 0) {
    return `${hours} hours ago`;
  }

  if (minutes > 0) {
    return `${minutes} minutes ago`;
  }

  return "just now";
}
