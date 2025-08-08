"use client";

// Example long-form YouTube video data
const longFormVideos = [
  {
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Documentary: The Journey",
    description: "A deep dive into the creative process behind the scenes."
  },
  {
    youtubeUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    title: "Wedding Highlights",
    description: "Capturing the most beautiful moments of a special day."
  },
  // Add more videos as needed
];

export default function LongFormVideoCarousel() {
  return (
    <div className="relative w-full overflow-x-auto py-6">
      <div className="flex gap-8 px-2 md:px-0" style={{ scrollSnapType: "x mandatory" }}>
        {longFormVideos.map((video, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 bg-white dark:bg-black rounded-2xl shadow-lg p-4 flex flex-col items-center"
            style={{ width: "340px", scrollSnapAlign: "center" }}
          >
            <div className="relative w-[300px] h-[170px] rounded-xl overflow-hidden bg-black">
              <iframe
                src={video.youtubeUrl}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full rounded-xl"
                style={{ aspectRatio: "16/9" }}
                title={video.title}
              />
            </div>
            <div className="mt-4 text-center">
              <div className="font-bold text-lg mb-1">{video.title}</div>
              <div className="text-gray-600 text-sm mb-2">{video.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
