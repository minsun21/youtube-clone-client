function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <i className="fas fa-bars"></i>
          <span className="header-logo">
            <i className="fab fa-youtube"></i>
            <span>YouTube</span>
          </span>
        </div>
        <div className="header-right">
          <i className="fas fa-search"></i>
          <i className="fas fa-th"></i>
          <i className="fas fa-video"></i>
          <i className="fas fa-bell"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
