import useReveal from '@/animations/useReveal';
import { fadeInUp } from '@/animations/motion';

const ResourceCard = ({ resource, index, onClick }) => {
  const {
    topic,
    readTime,
    title,
    description,
    source,
    date,
    image,
  } = resource
  
  const cardRef = useReveal(fadeInUp, { delay: 0.2 * (index % 3) })

  return (
    <article className="resource-card reveal reveal-up" ref={cardRef} onClick={onClick}>
      <img src={image} alt={title} />

      <div className="content">
        <div className="resource-meta">
          <span className="topic">{topic}</span>
          <span>{readTime}</span>
        </div>

        <h3 className="resource-title line-clamp-2">{title}</h3>

        <p className="resource-description line-clamp-3">
          {description}
        </p>

        <p className="resource-source">
          Source: <span>{source}</span>
        </p>

        <div className="resource-footer">
          <span>{date}</span>
          <span className="more"><span className="read">Read Article</span> &rarr;</span>
        </div>
      </div>
    </article>
  )
}

export default ResourceCard