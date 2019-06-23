exports.runQuery = (graphql, query) =>
  graphql(query).then(result =>
    result.errors ? Promise.reject(result.errors) : Promise.resolve(result.data)
  )
