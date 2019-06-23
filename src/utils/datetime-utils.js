exports.formatDate = dateString => {
  let date = new Date(dateString)

  return date.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })
}
