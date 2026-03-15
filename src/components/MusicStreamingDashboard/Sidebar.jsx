const Sidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-logo">Music Academy</div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Browse Music</div>
        <div className="sidebar-item">
          <span className="sidebar-icon">🏠</span>
          <span>Home</span>
        </div>
        <div className="sidebar-item active">
          <span className="sidebar-icon">💿</span>
          <span>Albums</span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon">🎵</span>
          <span>Tracks</span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon">🎸</span>
          <span>Genres</span>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Library</div>
        <div className="sidebar-item">
          <span className="sidebar-icon">⏱️</span>
          <span>Recently Played</span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon">❤️</span>
          <span>Favorite Tracks</span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon">📊</span>
          <span>Charts</span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon">📻</span>
          <span>Radio</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
