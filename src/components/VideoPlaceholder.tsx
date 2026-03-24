import { Video } from "lucide-react";

interface VideoPlaceholderProps {
  title?: string;
  className?: string;
}

const VideoPlaceholder = ({ title = "Video", className = "" }: VideoPlaceholderProps) => {
  return (
    <div
className={`flex items-center justify-center w-full h-full rounded-lg bg-muted border border-border print:hidden ${className}`}
      aria-label={`${title} placeholder`}
    >
      <div className="flex flex-col items-center gap-3 text-muted-foreground">
        <div className="w-16 h-16 rounded-full bg-muted-foreground/10 flex items-center justify-center">
          <Video className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <span className="text-sm font-medium">Video placeholder</span>
      </div>
    </div>
  );
};

export default VideoPlaceholder;
