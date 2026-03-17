const navItems = ['Home', 'FAQ', 'Changelog', 'Blog', 'Download', 'Contact'];

function Header() {
  return (
    <header className="topbar">
      <h1 className="brand">CS - Ticket System</h1>

      <nav className="topbar-actions" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item} href="/" onClick={(event) => event.preventDefault()}>
            {item}
          </a>
        ))}
        <button className="new-ticket-button" type="button">
          + New Ticket
        </button>
      </nav>
    </header>
  );
}

export default Header;