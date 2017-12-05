import pdfjs from 'pdfjs-dist'

import './index.scss'

const TEST_PDF = 'https://www.filepicker.io/api/file/niqBP1FjRYKPyX5HMj2p'

pdfjs.PDFJS.disableWorker = true

function getPages(pdf) {
  const promises = [];

  // Loop through the pages and make a canvas for each.
  for (let i = 0; i < pdf.pdfInfo.numPages; i += 1) {
    const pagePromise = new Promise((resolve) => {
      pdf.getPage(i + 1).then((page) => {
        const viewport = page.getViewport(1.5)
        const canvas = document.createElement('canvas')

        canvas.width = viewport.width
        canvas.height = viewport.height

        const ctx = canvas.getContext('2d')
        const renderTask = page.render({
          canvasContext: ctx,
          viewport: viewport,
        })

        resolve(canvas)
      })
    })

    promises.push(pagePromise)
  }

  return Promise.all(promises)
}

function init() {
  const $el = document.getElementById('app')

  pdfjs.getDocument(TEST_PDF)
    .then(getPages)
    .then(pages => pages.forEach(page => $el.appendChild(page)))
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  init()
} else {
  document.addEventListener('DOMContentLoaded', init)
}
