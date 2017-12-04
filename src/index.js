import pdfjs from 'pdfjs-dist'

pdfjs.PDFJS.disableWorker = true

pdfjs.getDocument('https://www.filepicker.io/api/file/niqBP1FjRYKPyX5HMj2p')
  .then((pdf) => {
    return pdf.getPage(1).then((page) => {
      const viewport = page.getViewport(1.0)
      const canvas = document.createElement('canvas')

      canvas.width = viewport.width
      canvas.height = viewport.height

      const ctx = canvas.getContext('2d')
      const renderTask = page.render({
        canvasContext: ctx,
        viewport: viewport,
      })

      document.body.appendChild(canvas)
    })
  })
