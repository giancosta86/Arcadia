const fs = require("fs")
const util = require("util")

const writeFile = util.promisify(fs.writeFile)

exports.saveToJson = (path, object) => writeFile(path, JSON.stringify(object))

exports.ensureDirectorySync = path => {
  try {
    fs.mkdirSync(path)
  } catch {
    //Just do nothing
  }
}
