import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/clubs', label: 'Clubs' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-4 py-3 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <span className="font-bold text-lg tracking-wide">Campus Club Finder</span>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `hover:underline transition ${
                  isActive ? 'font-bold underline' : ''
                }`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}