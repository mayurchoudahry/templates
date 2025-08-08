"use client";
// Example video data (replace with your own)
const videos = [
  {
    driveLink: "https://drive.google.com/file/d/1jGbDqWka511IYpMAT6Yge9p5PGypG7wZ/view?usp=sharing",
    title: "Short Film 1"
  },
  {
    driveLink: "https://drive.google.com/file/d/1jGbDqWka511IYpMAT6Yge9p5PGypG7wZ/view?usp=sharing",
    title: "Short Film 2"
  },
  {
    driveLink: "https://drive.google.com/file/d/1jGbDqWka511IYpMAT6Yge9p5PGypG7wZ/view?usp=sharing",
    title: "Short Film 3"
  }
];

function getGDriveEmbedUrl(driveLink: string) {
  // Extract file ID and return embed preview URL
  const match = driveLink.match(/\/file\/d\/([\w-]+)/);
  return match ? `https://drive.google.com/file/d/${match[1]}/preview` : driveLink;
}

export default function VideoCarousel() {
  return (
    <div className="w-full overflow-x-auto py-8">
      <div className="flex gap-6 px-2 md:px-0" style={{ scrollSnapType: "x mandatory" }}>
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
            style={{ width: "220px", scrollSnapAlign: "center" }}
          >
            <div className="relative w-[180px] h-[320px] rounded-xl overflow-hidden bg-black">
              <iframe
                src={getGDriveEmbedUrl(video.driveLink)}
                allow="autoplay"
                allowFullScreen
                className="w-full h-full"
                style={{ aspectRatio: "9/16" }}
                title={video.title}
              />
            </div>
            <div className="mt-4 text-center">
              <div className="font-bold text-base mb-1">{video.title}</div>
              <a
                href={video.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-xs hover:text-blue-800 transition"
              >
                Google Drive Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

