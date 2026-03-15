import { Home, Disc, Music, Guitar, Clock, Heart, TrendingUp, Radio } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-logo">Playcloud</div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Browse Music</div>
        <div className="sidebar-item">
          <Home className="sidebar-icon" size={20} />
          <span>Home</span>
        </div>
        <div className="sidebar-item active">
          <Disc className="sidebar-icon" size={20} />
          <span>Albums</span>
        </div>
        <div className="sidebar-item">
          <Music className="sidebar-icon" size={20} />
          <span>Tracks</span>
        </div>
        <div className="sidebar-item">
          <Guitar className="sidebar-icon" size={20} />
          <span>Genres</span>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Library</div>
        <div className="sidebar-item">
          <Clock className="sidebar-icon" size={20} />
          <span>Recently Played</span>
        </div>
        <div className="sidebar-item">
          <Heart className="sidebar-icon" size={20} />
          <span>Favorite Tracks</span>
        </div>
        <div className="sidebar-item">
          <TrendingUp className="sidebar-icon" size={20} />
          <span>Charts</span>
        </div>
        <div className="sidebar-item">
          <Radio className="sidebar-icon" size={20} />
          <span>Radio</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
