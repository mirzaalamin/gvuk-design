export function Video({ videoUrl }) {
    return (
        <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: 'auto' }}
        />
    )
}