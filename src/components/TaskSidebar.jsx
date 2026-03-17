function TaskSidebar({ inProgressTickets, resolvedTickets, onCompleteTicket }) {
  return (
    <aside className="sidebar">
      <section className="sidebar-panel">
        <h3 className="section-title">Task Status</h3>
        <p className="sidebar-caption">Select a ticket to add to Task Status</p>

        <div className="sidebar-list">
          {inProgressTickets.length === 0 ? (
            <p className="sidebar-empty">No active tasks yet.</p>
          ) : (
            inProgressTickets.map((ticket) => (
              <article className="task-card" key={ticket.id}>
                <p className="task-title">{ticket.title}</p>
                <button className="complete-button" type="button" onClick={() => onCompleteTicket(ticket)}>
                  Complete
                </button>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="sidebar-panel">
        <h3 className="section-title">Resolved Task</h3>

        <div className="sidebar-list">
          {resolvedTickets.length === 0 ? (
            <p className="sidebar-empty">No resolved tasks yet.</p>
          ) : (
            resolvedTickets.map((ticket) => (
              <article className="resolved-card" key={ticket.id}>
                <p>{ticket.title}</p>
              </article>
            ))
          )}
        </div>
      </section>
    </aside>
  );
}

export default TaskSidebar;