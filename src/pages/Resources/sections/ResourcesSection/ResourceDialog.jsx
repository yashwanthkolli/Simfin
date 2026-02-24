import { useEffect } from 'react'

const ResourceDialog = ({ resource, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="resource-dialog-backdrop" onClick={onClose}>
      <div
        className="resource-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resource-dialog-title"
      >
        <button className="dialog-close" onClick={onClose}>
          ×
        </button>

        <div className='image-container' style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${resource.image})`}}>
          <span className='topic'>{resource.topic}</span>
          <h2 id="resource-dialog-title" className="dialog-title">{resource.title}</h2>
        </div>

        <div className='content'>
          <div className="dialog-meta">
            <span><span className='property'>Published: </span>{resource.readTime}</span>
            <span><span className='property'>Read Time: </span>{resource.date}</span>
          </div>

          <article className="dialog-content">
            {resource.content
            .trim()
            .split('\n\n')
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        </div>

        <div className='dialog-footer'>
          <p className='footer-title'>Source Reference</p>
          <p className='source'>{resource.source}</p>
        </div>
      </div>
    </div>
  )
}

export default ResourceDialog
