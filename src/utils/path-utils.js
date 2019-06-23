const path = require("path")

exports.getPathAtRootWithoutExtension = filePath => {
  let basename = path.basename(filePath)

  let basenameWithoutExtension = basename.slice(0, basename.lastIndexOf("."))

  return `/${basenameWithoutExtension}`
}
