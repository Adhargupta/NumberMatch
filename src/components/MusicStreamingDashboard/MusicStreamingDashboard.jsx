import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import HeroPlaylistCard from './HeroPlaylistCard';
import AlbumGrid from './AlbumGrid';
import RightSidebar from './RightSidebar';
import BottomPlayer from './BottomPlayer';

const MusicStreamingDashboard = () => {
  return (
    <div className="music-streaming-dashboard">
      <div className="dashboard-main">
        <Sidebar />

        <div className="dashboard-center">
          <TopNavbar />
          <HeroPlaylistCard />
          <AlbumGrid />
        </div>

        <RightSidebar />
      </div>

      <BottomPlayer />
    </div>
  );
};

export default MusicStreamingDashboard;
