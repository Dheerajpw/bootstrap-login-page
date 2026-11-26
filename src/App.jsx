
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main className="login-section">
        <div className="container">
          <div className="row align-items-center justify-content-center g-5">
            <div className="col-lg-6">
              <div className="welcome-content">
                <span className="badge rounded-pill text-bg-primary mb-3">
                  Simple. Secure. Reliable.
                </span>

                <h1 className="display-4 fw-bold">
                  Your journey
                  <br />
                  starts <span className="text-primary">here.</span>
                </h1>

                <p className="lead text-secondary mt-3">
                  Sign in to access your account and enjoy a
                  seamless experience with Loginify.
                </p>

                <div className="feature-list mt-4">
                  <p>✓ Easy and secure login</p>
                  <p>✓ Simple user experience</p>
                  <p>✓ Responsive on every device</p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-8 col-sm-10" id="login">
              <LoginForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
