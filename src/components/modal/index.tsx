import { createPortal } from 'react-dom'

import { usePortal } from 'hooks'
import { Button } from 'components'

interface Props {
  show?: boolean
  header?: React.ReactNode
  content?: React.ReactNode
  noFooter?: boolean
  footer?: React.ReactNode
  footerText?: string
  footerAction?: (e?: React.MouseEvent) => void
  close: (props?: any) => void
}

const Modal: React.FC<Props> = ({
  show,
  header,
  content,
  noFooter = false,
  footer,
  footerText,
  footerAction,
  close,
}) => {
  const target = usePortal('modal-root')

  const modalComponent = show && (
    <div className="modal-backdrop" onClick={close}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {header && (
          <div className="header">
            {header}
            <span className="close" onClick={close}>X</span>
          </div>
        )}
        <div className="content">
          {content && Array.isArray(content)
            ? content.map((line, index) => <span key={`text-${index}`} className="text">{line}</span>)
            : <span className="text">{content}</span>
          }
        </div>
        {!noFooter && (
          <div className="footer">
            {footer || (
              <Button
                text={footerText || 'OK'}
                onClick={(e) => footerAction ? footerAction(e) : close()}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )

  return createPortal(modalComponent, target)
}

export default Modal