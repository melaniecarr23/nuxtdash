// server/middleware/checkDomain.ts

import { defineEventHandler, sendError, createError } from 'h3'

export default defineEventHandler((event) => {
  const domain = event.context.domain
  const url = event.node.req.url || ''

  // Check if the request is for the /dash routes
  if (url.startsWith('/dash')) {
    // If the domain is not 'ihcdocdash.com', block the request
    if (domain !== 'ihcdocdash.com') {
      console.log('Domain: '+ domain +' not ihcdocdash.com so unauthorized.')
      sendError(event, createError({ statusCode: 403, statusMessage: 'Access Forbidden:'+ domain }))
    }
  }
})
