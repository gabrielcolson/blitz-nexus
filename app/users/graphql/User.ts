import { schema } from "nexus"

schema.objectType({
  name: "User",
  definition(t) {
    t.int("id")
    t.string("email")
  },
})
