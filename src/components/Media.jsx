import { useEffect, useState } from 'react';

export default function Media() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        // 1. Define your Channel RSS URL
        const channelId = "UCl6FuXZXyRqaVZU4l3zRoOw";
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        
        // 2. Use RSS2JSON API (Free tier) to convert the feed to JSON
        // This is more stable than a raw CORS proxy for YouTube
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'ok') {
          const videoData = data.items.map((item) => {
            // Extract Video ID from the link (YouTube links usually end in ?v=ID)
            const vId = item.link.split('v=')[1];
            return {
              id: vId,
              title: item.title,
              link: item.link,
              thumbnail: item.thumbnail || `https://i.ytimg.com/vi/${vId}/mqdefault.jpg`
            };
          });
          setVideos(videoData.slice(0, 6));
          setError(null);
        } else {
          throw new Error("Feed conversion failed");
        }
      } catch (err) {
        console.error("YouTube Fetch Error:", err);
        setError("Unable to sync YouTube feed. Click 'Watch on YouTube' below.");
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
        {/* Image Gallery */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
            <span className="p-2 bg-blue-100 text-blue-600 rounded-lg">📸</span> 
            Image Gallery
          </h3>
          <div className="aspect-video bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-200 text-slate-400">
             Image Feed Content
          </div>
        </div>

        {/* Video Highlights */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
            <span className="p-2 bg-red-100 text-red-600 rounded-lg">🎥</span> 
            Video Highlights
          </h3>
          
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="h-24 bg-slate-100 animate-pulse rounded-xl" />
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-10">
                <p className="text-slate-500 text-sm italic mb-4">{error}</p>
                <a 
                  href="https://www.youtube.com/@SajuMulakkal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Watch on YouTube
                </a>
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
                  <div className="relative flex-shrink-0 w-32 h-20 overflow-hidden rounded-lg shadow-sm bg-slate-200">
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
