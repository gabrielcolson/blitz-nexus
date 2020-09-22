if (process.env.NODE_ENV === "development") {
  require("nexus").default.reset()
}

require("app/users/graphql/User")
require("app/users/graphql/Query")

const app = require("nexus").default
// Require your nexus modules here.
// Do not write them inline, since the Nexus API is typed `any` because of `require` import.
// require('...')
app.assemble()
// this is required for file uploads to work
export const config = {
  api: {
    bodyParser: false,
  },
}
export default app.server.handlers.graphql
