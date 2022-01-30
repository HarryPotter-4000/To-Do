function getFormattedCurrentDate() {
  const date = new Date();
  const day = date.toLocaleDateString();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

export { getFormattedCurrentDate };
