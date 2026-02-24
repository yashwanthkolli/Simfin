import './ResourcesSection.styles.scss'
import resources from './ResourcesData'
import ResourceCard from './ResourceCard'
import { useState } from 'react'
import ResourceDialog from './ResourceDIalog'

const ResourcesSection = () => {
  const [activeResource, setActiveResource] = useState(null)

  return (
    <section className='resources-section'>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            index={index}
            onClick={() => setActiveResource(resource)}
          />
        ))}
      </div>
      {activeResource && (
        <ResourceDialog
          resource={activeResource}
          onClose={() => setActiveResource(null)}
        />
      )}
    </section>
  )
}

export default ResourcesSection