import Image from 'next/image'
import Button from '../Button'
import VideoPopup from '../popups/VideoPopup'

const VideoCard = ({ children, title, imageUrl, price, buttonText, buttonUrl = "#", vimeoVideoUrl, youtubeVideoUrl }) => {
    return (
        <div className="!border-t-2 !border-primary dark:bg-gray-800 primary-gradient flex flex-col justify-between p-6 gap-10 flex-1">

            <VideoPopup vimeoVideoUrl={vimeoVideoUrl} youtubeVideoUrl={youtubeVideoUrl}>
                <Image
                    src={imageUrl}
                    alt={title}
                    height={400}
                    width={280}
                    className="self-center w-full max-sm:h-[350px] object-cover"
                />
            </VideoPopup>

            <div>
                <h3 className='h3 text-primary dark:text-white'>
                    {title}</h3>
                <h3 className='h3 text-primary dark:text-white'>{price}</h3>
            </div>
            <div>
                {children}
            </div>
            <Button url={buttonUrl} primary otherClasses="text-[13px]">
                {buttonText}
            </Button>
        </div>
    )
}

export default VideoCard