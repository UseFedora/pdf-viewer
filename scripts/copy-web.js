const fs = require('fs-extra')
const PATH_TO_WEB = './node_modules/pdf.js/web'
const PATH_TO_TARGET = './dist'

fs.copy(PATH_TO_WEB, PATH_TO_TARGET, (error) => {
  if (error) {
    return console.error(err)
  }

  console.log(`
    PDF.js web folder copied:
    Origin:    ${PATH_TO_WEB}
    Target:    ${PATH_TO_TARGET}
  `)
})
