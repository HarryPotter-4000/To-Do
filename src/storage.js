function load() {
  let result = [];
  const data = localStorage.getItem("TODO");
  if (data) {
    const parsed = JSON.parse(data);
    if (parsed && Array.isArray(parsed)) {
      result = parsed;
    }
  }
  return result;
}
function save(tasks) {
  localStorage.setItem("TODO", JSON.stringify(tasks));
}
export { load, save };
