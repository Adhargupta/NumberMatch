import NowPlayingCard from './NowPlayingCard';
import PlaylistList from './PlaylistList';

const RightSidebar = () => {
  return (
    <div className="dashboard-right-sidebar">
      <div>
        <div className="posted-info">Posted by Dungen - 5m</div>
        <div className="merch-card">
          <div className="merch-image"></div>
        </div>
      </div>

      <NowPlayingCard />

      <PlaylistList />
    </div>
  );
};

export default RightSidebar;
