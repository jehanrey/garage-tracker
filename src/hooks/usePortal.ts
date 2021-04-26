import { useRef, useEffect } from 'react'
import { addRootElement, createRootElement } from 'utils/dom-helpers'

const usePortal = (id: string) => {
  const rootElemRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`)
    const parentElem = existingParent || createRootElement(id)
    !existingParent && addRootElement(parentElem)
    if (rootElemRef.current) {
      parentElem.appendChild(rootElemRef.current)
    }
    return () => {
      rootElemRef?.current?.remove()
      !parentElem.childElementCount && parentElem.remove()
    }
  }, [id])

  const getRootElem = () => {
    !rootElemRef.current && (rootElemRef.current = document.createElement('div'))
    return rootElemRef.current
  }

  return getRootElem()
}

export default usePortal