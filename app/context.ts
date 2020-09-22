import { getSessionContext } from "@blitzjs/server"
import { schema } from "nexus"

schema.addToContext(async ({ req, res }) => {
  const session = await getSessionContext(req, res)
  return {
    session,
  }
})
