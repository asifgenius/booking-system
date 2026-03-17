import { useState } from 'react';
import { toast } from 'react-toastify';
import topPattern from '../vector1.png';
import Footer from './components/Footer';
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import TaskSidebar from './components/TaskSidebar';
import TicketList from './components/TicketList';
import { initialTickets } from './data/tickets';

function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleAssignTicket = (ticket) => {
    const alreadyAssigned = inProgressTickets.some((item) => item.id === ticket.id);

    if (alreadyAssigned) {
      toast.info(`${ticket.title} is already in progress.`);
      return;
    }

    setInProgressTickets((current) => [...current, ticket]);
    toast.success(`${ticket.title} moved to task status.`);
  };

  const handleCompleteTicket = (ticket) => {
    setInProgressTickets((current) => current.filter((item) => item.id !== ticket.id));
    setResolvedTickets((current) => [ticket, ...current]);
    setTickets((current) => current.filter((item) => item.id !== ticket.id));
    toast.success(`${ticket.title} marked as resolved.`);
  };

  return (
    <div className="app-shell">
      <Header />

      <main className="layout">
        <SummaryCards
          topPattern={topPattern}
          inProgressCount={inProgressTickets.length}
          resolvedCount={resolvedTickets.length}
        />

        <section className="content-grid">
          <TicketList
            tickets={tickets}
            inProgressTickets={inProgressTickets}
            onAssignTicket={handleAssignTicket}
          />

          <TaskSidebar
            inProgressTickets={inProgressTickets}
            resolvedTickets={resolvedTickets}
            onCompleteTicket={handleCompleteTicket}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;