export default function Media() {
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
            {/* Supply your image feed here */}
            Image Feed Content
          </div>
        </div>

        {/* Video Feed Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
            <span className="p-2 bg-red-100 text-red-600 rounded-lg">🎥</span> 
            Video Highlights
          </h3>
          <div className="aspect-video bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-200 text-slate-400">
            {/* Supply your video feed here */}
            Video Feed Content
          </div>
        </div>
      </div>
    </div>
  );
}
