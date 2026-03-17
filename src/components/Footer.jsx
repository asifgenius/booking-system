const footerColumns = [
  {
    title: 'Company',
    links: ['About Support Operations', 'Our Mission', 'Contact Sales'],
  },
  {
    title: 'Services',
    links: ['Products & Services', 'Customer Stories', 'Download Apps'],
  },
  {
    title: 'Information',
    links: ['Privacy Policy', 'Terms & Conditions', 'Join Us'],
  },
];

const socialLinks = [
  { icon: 'X', label: '@CS - Ticket System' },
  { icon: 'in', label: '@CS - Ticket System' },
  { icon: 'f', label: '@CS - Ticket System' },
  { icon: '\u2709', label: 'support@cst.com' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>CS - Ticket System</h3>
          <p>
            CS - Ticket System helps support teams handle authentication issues, payment failures,
            billing corrections, refunds, and customer account requests from one central workspace.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="footer-column">
            <h4>{column.title}</h4>
            <div className="footer-links">
              {column.links.map((item) => (
                <a key={item} href="/" onClick={(event) => event.preventDefault()}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="footer-column">
          <h4>Social Links</h4>
          <div className="footer-links footer-social-links">
            {socialLinks.map((item) => (
              <a key={`${item.icon}-${item.label}`} href="/" onClick={(event) => event.preventDefault()} className="footer-social-item">
                <span className="footer-social-icon">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 CS - Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;