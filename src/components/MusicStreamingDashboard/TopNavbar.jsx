import { Search, Sparkles, Newspaper, Shuffle } from 'lucide-react';

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="breadcrumb">Artists &gt; Thundercat</div>
      <div className="nav-menu-items">
        <span className="nav-menu-item">
          <Search size={18} />
        </span>
        <span className="nav-menu-item">New Releases</span>
        <span className="nav-menu-item">News Feed</span>
        <span className="nav-menu-item">Shuffle Play</span>
      </div>
    </div>
  );
};

export default TopNavbar;
