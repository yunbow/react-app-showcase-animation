import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const navGroups = [
    {
      category: 'Display & Transition',
      links: [
        { path: '/fade-in', label: 'Fade In/Out' },
        { path: '/blur-reveal', label: 'Blur Reveal' },
        { path: '/line-reveal', label: 'Reveal from Lines' },
        { path: '/interpolate', label: 'Color Interpolation' },
        { path: '/transform-interpolation', label: 'Transform Interpolation' },
      ],
    },
    {
      category: 'Motion & Movement',
      links: [
        { path: '/shake', label: 'Shake' },
        { path: '/pulse', label: 'Pulse' },
        { path: '/bounce', label: 'Bounce' },
        { path: '/wave-effect', label: 'Wave Effect' },
        { path: '/neon-pulse', label: 'Glow / Neon Pulse' },
      ],
    },
    {
      category: 'Interaction',
      links: [
        { path: '/hover', label: 'Hover' },
        { path: '/draggable', label: 'Draggable' },
        { path: '/ripple', label: 'Ripple Effect' },
        { path: '/magnetic-hover', label: 'Magnetic Hover' },
        { path: '/follow-cursor', label: 'Follow Cursor' },
        { path: '/magnetic-drag', label: 'Magnetic Drag / Elastic' },
        { path: '/reveal-on-hover', label: 'Reveal on Hover' },
      ],
    },
    {
      category: 'UI Components',
      links: [
        { path: '/modal', label: 'Modal' },
        { path: '/slide-menu', label: 'Slide Menu' },
        { path: '/carousel', label: 'Carousel' },
        { path: '/accordion', label: 'Accordion' },
        { path: '/flip-card', label: 'Flip Card' },
        { path: '/loading-spinner', label: 'Loading Spinner' },
        { path: '/progress-bar', label: 'Progress Bar' },
      ],
    },
    {
      category: 'Text & Number',
      links: [
        { path: '/count-up', label: 'Count Up/Down' },
        { path: '/typewriter', label: 'Typewriter' },
        { path: '/number-scramble', label: 'Number Scramble' },
        { path: '/text-shuffle', label: 'Text Shuffle / Split Animation' },
        { path: '/text-reveal', label: 'Text Reveal' },
      ],
    },
    {
      category: 'Scroll & List',
      links: [
        { path: '/scroll-animation', label: 'Scroll Animation' },
        { path: '/staggered-list', label: 'Staggered List' },
        { path: '/scroll-snap', label: 'Scroll Snap Animation' },
      ],
    },
  ];

  return (
    <nav className="navigation">
      <div className="nav-header">
        <Link to="/" className="nav-logo">
          React Animation Hooks
        </Link>
      </div>
      <div className="nav-groups">
        {navGroups.map((group) => (
          <div key={group.category} className="nav-group">
            <h3 className="nav-group-title">{group.category}</h3>
            <ul className="nav-list">
              {group.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
