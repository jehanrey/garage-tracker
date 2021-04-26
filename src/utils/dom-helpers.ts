export const createRootElement = (id: string) => {
  const rootContainer = document.createElement('div')
  rootContainer.setAttribute('id', id)
  return rootContainer
}

export const addRootElement = (rootElem: Element) => {
  document.body.insertBefore(
    rootElem,
    document!.body!.lastElementChild!.nextElementSibling,
  )
}