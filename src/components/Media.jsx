import { useEffect, useState } from 'react';

export default function Media() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        // 1. Your Channel RSS URL
        const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=UCl6FuXZXyRqaVZU4l3zRoOw`;
        
        // 2. Cache Buster: We add a random timestamp to the URL 
        // This forces the proxy (allorigins) to fetch a fresh copy instead of a cached one.
        const cacheBuster = `&t=${new Date().getTime()}`;
        const PROXY_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL + cacheBuster)}`;
        
        const response = await fetch(PROXY_URL);
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");
        const entries = xml.querySelectorAll("entry");

        if (entries.length === 0) {
           setVideos([]);
        } else {
          const videoData = Array.from(entries).map((entry) => {
            // Safer selection using namespaced tags if available, or fallbacks
            const vId = entry.querySelector("videoId")?.textContent || 
                        entry.getElementsByTagName("yt:videoId")[0]?.textContent;
            const title = entry.querySelector("title")?.textContent || "Untitled Video";
            const link = entry.querySelector("link")?.getAttribute("href") || "#";

            return {
              id: vId,
              title: title,
              link: link,
              thumbnail: `https://i.ytimg.com/vi/${vId}/mqdefault.jpg`
            };
          });

          setVideos(videoData.slice(0, 6)); 
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching YouTube feed:", err);
        setError("Could not load videos. Please try again later.");
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
              <p className="text-red-500 text-center py-10 text-sm">{error}</p>
            ) : videos.length > 0 ? (
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
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/120x90?text=Video'; }}
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
            ) : (
              <p className="text-slate-400 text-center py-10 italic">No videos found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
