import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function VideoPopup({ children, vimeoVideoUrl, youtubeVideoUrl }) {
    return (
        <Dialog className="dialog">
            <form>
                <DialogTrigger asChild className="cursor-pointer">
                    {children}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px] flex items-center justify-center">
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        {vimeoVideoUrl && (
                            <iframe title="vimeo-player" src={vimeoVideoUrl} width="640" height="360" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen></iframe>
                        )}
                        {youtubeVideoUrl && (
                            <iframe width="560" height="315" src={youtubeVideoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        )}
                    </DialogHeader>
                </DialogContent>
            </form>
        </Dialog>
    )
}
