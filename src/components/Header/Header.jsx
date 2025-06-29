import React from 'react';
import { LogOutButton, Container, Logo } from '../index';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ];

  return (
    <header className="py-2 bg-teal-600 text-white shadow-md">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo width="w-36" />
          </Link>

          {/* Center: Nav Items */}
          <ul className="flex-1 flex justify-center items-center gap-6">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="px-4 py-2 rounded-full hover:bg-teal-700 transition duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
          </ul>

          {/* Right: Logout */}
          {authStatus && (
            <div className="flex-shrink-0">
              <LogOutButton />
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
