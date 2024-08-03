// server/middleware/detectDomain.ts

import { defineEventHandler, getRequestHeaders } from 'h3'

export default defineEventHandler((event) => {
  const headers = getRequestHeaders(event)
  const host = headers.host || ''  // Get the host header
  console.log(`Detected domain: ${host}`)  // Log the detected domain
  event.context.domain = host  // Attach the host to the event context
})
