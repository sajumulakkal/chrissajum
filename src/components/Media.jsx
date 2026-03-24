import { useEffect, useState } from 'react';

export default function Media() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Using a CORS proxy to allow the browser to read the YouTube RSS XML
        const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=UCl6FuXZXyRqaVZU4l3zRoOw`;
        const PROXY_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL)}`;
        
        const response = await fetch(PROXY_URL);
        const data = await response.json();
        
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");
        const entries = xml.querySelectorAll("entry");

        const videoData = Array.from(entries).map((entry) => ({
          id: entry.querySelector("videoId").textContent,
          title: entry.querySelector("title").textContent,
          link: entry.querySelector("link").getAttribute("href"),
          thumbnail: `https://i.ytimg.com/vi/${entry.querySelector("videoId").textContent}/mqdefault.jpg`
        }));

        setVideos(videoData.slice(0, 6)); // Display the latest 6 uploads
        setLoading(false);
      } catch (error) {
        console.error("Error fetching YouTube feed:", error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Media Feed</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Feed Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
            <span className="p-2 bg-blue-100 text-blue-600 rounded-lg">📸</span> 
            Image Gallery
          </h3>
          <div className="aspect-video bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-200 text-slate-400">
            Image Feed Content
          </div>
        </div>

        {/* Video Feed Section - Now Dynamic */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
            <span className="p-2 bg-red-100 text-red-600 rounded-lg">🎥</span> 
            Video Highlights
          </h3>
          
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {loading ? (
              <div className="animate-pulse flex flex-col gap-4">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="h-24 bg-slate-100 rounded-xl" />
                ))}
              </div>
            ) : videos.length > 0 ? (
              videos.map((video) => (
                <a 
                  key={video.id} 
                  href={video.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex gap-4 p-2 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-100"
                >
                  <div className="relative flex-shrink-0 w-32 h-20 overflow-hidden rounded-lg shadow-sm">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-sm font-bold text-slate-800 line-clamp-2 leading-tight group-hover:text-red-600 transition-colors">
                      {video.title}
                    </h4>
                    <span className="text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider italic">YouTube Upload</span>
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
