export function formatArgs(args) {
  let id, options, setup
  if (isSting(args[0])) {
    id = args[0]
    if (isFunction(args[1]))
      setup = args[1]
    else
      options = args[1]
  }
  else {
    if (isFunction(args[0])) { setup = args[0] }
    else {
      id = args[0].id
      options = args[0]
    }
  }
  return { id, options, setup }
}

export function isFunction(val) {
  return typeof val === 'function'
}

export function isSting(val) {
  return typeof val === 'string'
}
