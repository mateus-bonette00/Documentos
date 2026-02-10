import type { Video } from '../data/content'

interface VideoPlayerProps {
  video: Video
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/30 bg-white/60 shadow-lg backdrop-blur-xl">
      <div className="relative aspect-video w-full">
        <video
          src={video.src}
          controls
          preload="metadata"
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="font-display text-sm font-semibold text-text-primary">{video.title}</h4>
        {video.caption && (
          <p className="mt-1 text-xs text-text-muted">{video.caption}</p>
        )}
      </div>
    </div>
  )
}
