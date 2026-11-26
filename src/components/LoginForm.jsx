
import { useState } from 'react'

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    setMessage('Login form submitted successfully!')
  }

  return (
    <div className="login-card">
      <div className="text-center mb-4">
        <div className="login-icon">✦</div>

        <h2 className="fw-bold mt-3">Welcome Back!</h2>

        <p className="text-secondary">
          Please enter your details to sign in.
        </p>
      </div>

      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">
            Email Address
          </label>

          <input
            type="email"
            className="form-control form-control-lg"
            id="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-semibold">
            Password
          </label>

          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control form-control-lg"
              id="password"
              placeholder="Enter your password"
              minLength="6"
              required
            />

            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
            />

            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>

          <a href="#" className="small text-decoration-none">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg w-100 rounded-3"
        >
          Login
        </button>

        <p className="text-center mt-4 mb-0 text-secondary">
          Don't have an account?{' '}
          <a href="#" className="fw-semibold text-decoration-none">
            Sign up
          </a>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
