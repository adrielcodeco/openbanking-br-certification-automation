const Debug = require('debug')

const infoTrace = Debug('obbtest:trace')
const infoDebug = Debug('obbtest:info')
const errorDebug = Debug('obbtest:error')

module.exports = {
  trace: infoTrace,
  info: infoDebug,
  error: errorDebug,
}
