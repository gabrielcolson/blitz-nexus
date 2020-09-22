import { schema } from "nexus"
import getCurrentUser from "../queries/getCurrentUser"

schema.queryType({
  definition(t) {
    t.field("getCurrentUser", {
      type: "User",
      resolve: (root, args, ctx) => getCurrentUser(null, ctx),
    })
  },
})
