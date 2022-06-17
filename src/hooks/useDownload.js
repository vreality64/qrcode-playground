import { useMutation } from 'react-query'

export function useDownload() {
  return useMutation(({ src, filename }) => {
    download(src, filename)
  })
}

function download(link, filename) {
  const element = document.createElement('a')
  element.setAttribute('href', link)
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}