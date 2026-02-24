import './PageSkeleton.styles.scss';

const PageSkeleton = () => {
  return (
    <div className="page-skeleton">
      <div className="skeleton-header" />

      <div className="skeleton-content">
        <div className="skeleton-left">
          <div className="skeleton-title" />
          <div className="skeleton-line" />
          <div className="skeleton-line short" />
          <div className="skeleton-button" />
        </div>

        <div className="skeleton-right" />
      </div>

      <div className="skeleton-section-block" />
      <div className="skeleton-section-block" />
    </div>
  )
}

export default PageSkeleton
