import { useEffect, useState } from 'react';
import data from '../data/profile.json';

export default function Media() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const channelId = "UCl6FuXZXyRqaVZU4l3zRoOw";
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (result.status === 'ok') {
          const videoData = result.items.map((item) => ({
            id: item.link.split('v=')[1],
            title: item.title,
            link: item.link,
            thumbnail: item.thumbnail || `https://i.ytimg.com/vi/${item.link.split('v=')[1]}/mqdefault.jpg`
          }));
          setVideos(videoData.slice(0, 6));
          setError(null);
        } else {
          throw new Error("Feed conversion failed");
        }
      } catch (err) {
        console.error("YouTube Fetch Error:", err);
        setError("Unable to sync YouTube feed.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Media Feed</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* 1. Dynamic Image Gallery Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
            <span className="p-2 bg-blue-100 text-blue-600 rounded-lg">📸</span> 
            Image Gallery
          </h3>
          
          <div className="space-y-4">
            {data.media.photoAlbums.map((album, index) => (
              <a 
                key={index}
                href={album.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {album.title}
                    </h4>
                    <p className="text-sm text-slate-500 line-clamp-1 mt-1">
                      {album.description}
                    </p>
                  </div>
                  <div className="text-slate-300 group-hover:text-blue-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
            <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold mt-4">
              Albums hosted on Google Photos
            </p>
          </div>
        </div>

        {/* 2. Dynamic Video Highlights Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
            <span className="p-2 bg-red-100 text-red-600 rounded-lg">🎥</span> 
            Video Highlights
          </h3>
          
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="h-20 bg-slate-100 animate-pulse rounded-xl" />
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-10">
                <p className="text-slate-500 text-sm italic mb-4">{error}</p>
                <a href="https://www.youtube.com/@SajuMulakkal" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-red-600 underline">Visit YouTube Channel</a>
              </div>
            ) : (
              videos.map((video) => (
                <a 
                  key={video.id} 
                  href={video.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex gap-4 p-2 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-100"
                >
                  <div className="relative flex-shrink-0 w-28 h-16 overflow-hidden rounded-lg shadow-sm bg-slate-200">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-sm font-bold text-slate-800 line-clamp-2 leading-tight group-hover:text-red-600 transition-colors">
                      {video.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-widest">YouTube</span>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
