 import React, { useEffect, useRef } from 'react';
 {/*import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-vr/dist/videojs-vr.css';
import 'videojs-vr'; */}

export default function Video360Player({ src }) {
  {/*  const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        if (!playerRef.current) {
            playerRef.current = videojs(videoRef.current, {
                controls: true,
                autoplay: false,
                preload: 'auto',
                loop: false,
                muted: false,
                fluid: true,
                plugins: {
                    vr: {
                        projection: 'AUTO',
                        debug: false,
                    },
                },
            });
        }

        playerRef.current.src({ type: 'video/mp4', src });
        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, [src]);
*/}
    return (
        <div>
            {/**
            <video ref={videoRef} playsInline></video>*/}
        </div>
    );
}