import placeHolderImage from "../assets/no-image-placeholder-6f3882e0.webp";

export default function getCroppedImageURL(url: string) {
    if (!url) return placeHolderImage;
    const delimiter = "media/";
    const index = url.indexOf(delimiter) + delimiter.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}