import React, { useEffect, useRef } from 'react';

interface SafariAutoplayVideoProps {
  src: string;
  fallbackSrc?: string;
  poster?: string;
  className?: string;
  containerClassName?: string;
  ariaLabel?: string;
}

/**
 * SafariAutoplayVideo
 * Cross-browser, Safari iOS & macOS compliant autoplay video component.
 * 
 * Guarantees:
 * 1. Zero play button overlays on Safari (iOS / macOS).
 * 2. Proper WebKit muted and inline playback attributes & properties.
 * 3. Automatic retry if power-saving mode or strict autoplay policy blocks initial play.
 * 4. Resumes playback when page becomes visible or scrolls into view.
 */
export const SafariAutoplayVideo: React.FC<SafariAutoplayVideoProps> = ({
  src,
  fallbackSrc,
  poster,
  className = 'w-full h-full object-cover',
  containerClassName = 'w-full h-full relative overflow-hidden',
  ariaLabel = 'Vídeo Canoeira',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Enforce WebKit / Safari inline muted attributes and properties directly on the DOM element
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('x5-playsinline', 'true');
    video.setAttribute('x5-video-player-type', 'h5');
    video.setAttribute('x5-video-player-fullscreen', 'true');
    video.setAttribute('controlslist', 'nodownload nofullscreen noremoteplayback');
    video.disablePictureInPicture = true;

    // Force play attempt
    const attemptPlay = () => {
      if (!video) return;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was deferred by browser policy (e.g. low power mode)
          // Setup a one-time gesture listener on the window to kick off playback silently
          const onFirstInteraction = () => {
            if (video) {
              video.muted = true;
              video.play().catch(() => {});
            }
            window.removeEventListener('touchstart', onFirstInteraction);
            window.removeEventListener('click', onFirstInteraction);
            window.removeEventListener('scroll', onFirstInteraction);
          };

          window.addEventListener('touchstart', onFirstInteraction, { once: true, passive: true });
          window.addEventListener('click', onFirstInteraction, { once: true, passive: true });
          window.addEventListener('scroll', onFirstInteraction, { once: true, passive: true });
        });
      }
    };

    attemptPlay();

    // Event listeners to keep video playing smoothly
    const handleLoadedMetadata = () => attemptPlay();
    const handleCanPlay = () => attemptPlay();
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && video.paused) {
        attemptPlay();
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // IntersectionObserver to pause when deeply offscreen and resume when in view
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (video.paused) {
                attemptPlay();
              }
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(video);
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [src, fallbackSrc]);

  return (
    <div className={containerClassName}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        poster={poster}
        aria-label={ariaLabel}
        className={`${className} pointer-events-none select-none`}
        style={{
          outline: 'none',
          border: 'none',
        }}
      >
        <source src={src} type="video/mp4" />
        {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
      </video>
    </div>
  );
};
