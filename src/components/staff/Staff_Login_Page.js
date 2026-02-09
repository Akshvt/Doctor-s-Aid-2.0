import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/staff/Staff_Login_Page.css";

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const Staff_Login_Page = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (username.length < 6) {
      newErrors.username = 'Username must be at least 6 characters';
    }
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      navigate('/staff-home');
    }
  };

  return (
    <div className="login-page staff-login">
      {/* Background Elements */}
      <div className="login-bg-gradient"></div>
      <div className="login-bg-grid"></div>
      <div className="login-orb login-orb-1"></div>
      <div className="login-orb login-orb-2"></div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/')}>
        <BackIcon />
        <span>Back</span>
      </button>

      {/* Login Card */}
      <div className="login-card slide-up">
        {/* Card Header */}
        <div className="login-header">
          <div className="login-icon staff">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </div>
          <h1>Staff Login</h1>
          <p>Access administrative tools and patient records</p>
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <span className="input-icon">
              <UserIcon />
            </span>
            <input
              type="text"
              placeholder="Username (min 6 characters)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={errors.username ? 'error' : ''}
              required
            />
            {errors.username && <span className="error-msg">{errors.username}</span>}
          </div>

          <div className="input-group">
            <span className="input-icon">
              <LockIcon />
            </span>
            <input
              type="password"
              placeholder="Password (min 8 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'error' : ''}
              required
            />
            {errors.password && <span className="error-msg">{errors.password}</span>}
          </div>

          <button
            type="submit"
            className={`login-btn staff ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="spinner"></span>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRightIcon />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="login-footer">
          <p>Contact your administrator for access issues</p>
        </div>
      </div>
    </div>
  );
};

export default Staff_Login_Page;
