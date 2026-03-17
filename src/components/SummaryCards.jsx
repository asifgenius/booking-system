function SummaryCards({ topPattern, inProgressCount, resolvedCount }) {
  return (
    <section className="banner-grid">
      <article
        className="summary-card summary-card-progress"
        style={{ '--summary-pattern': `url(${topPattern})` }}
      >
        <div className="summary-content">
          <h2>In-Progress</h2>
          <strong>{inProgressCount}</strong>
        </div>
      </article>

      <article
        className="summary-card summary-card-resolved"
        style={{ '--summary-pattern': `url(${topPattern})` }}
      >
        <div className="summary-content">
          <h2>Resolved</h2>
          <strong>{resolvedCount}</strong>
        </div>
      </article>
    </section>
  );
}

export default SummaryCards;