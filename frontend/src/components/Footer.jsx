function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Portfolio</h5>
            <p>Showcasing my work with the help of AI agents</p>
          </div>
          <div className="col-md-6 text-md-end">
            <h5>Connect</h5>
            <div className="social-links">
              <a href="#" className="text-white me-2"></a>
              <a href="#" className="text-white me-2"></a>
              <a href="#" className="text-white me-2"></a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
