import React from 'react';
import './styles.scss';

const VideoEmbed = ({ videoSrc, title }) => (
    <div className="YoutubeEmbed-container mt-4">
        <iframe
            title={title}
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    </div>
)

export default VideoEmbed;