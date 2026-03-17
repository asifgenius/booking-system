function TicketList({ tickets, inProgressTickets, onAssignTicket }) {
  return (
    <section className="tickets-section">
      <h3 className="section-title">Customer Tickets</h3>

      <div className="ticket-grid">
        {tickets.map((ticket) => {
          const isAssigned = inProgressTickets.some((item) => item.id === ticket.id);
          const displayStatus = isAssigned ? 'In Progress' : ticket.status;

          return (
            <article className="ticket-card" key={ticket.id}>
              <div className="ticket-card-head">
                <h4>{ticket.title}</h4>
                <span className={`status-pill ${displayStatus === 'In Progress' ? 'status-progress' : 'status-open'}`}>
                  <span className="status-dot" />
                  {displayStatus === 'In Progress' ? 'In- Progress' : 'Open'}
                </span>
              </div>

              <p className="ticket-description">{ticket.description}</p>

              <div className="ticket-meta-row">
                <span className="ticket-id">#{ticket.id}</span>
                <span className={`priority-text priority-${ticket.priority.toLowerCase()}`}>
                  {ticket.priority.toUpperCase()} PRIORITY
                </span>
                <span className="ticket-customer">{ticket.customer}</span>
                <span className="ticket-date">{ticket.createdAt}</span>
              </div>

              <button
                className="ticket-action"
                type="button"
                onClick={() => onAssignTicket(ticket)}
              >
                Add to Task Status
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default TicketList;