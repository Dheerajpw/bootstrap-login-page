
function Footer() {
  return (
    <footer id="footer" className="footer py-4">
      <div className="container text-center">
        <p className="mb-1">
          © {new Date().getFullYear()} Loginify. All rights reserved.
        </p>

        <p className="small text-secondary mb-0">
          Secure login experience built with React and Bootstrap.
        </p>
      </div>
    </footer>
  )
}

export default Footer
