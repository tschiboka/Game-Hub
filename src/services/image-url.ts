export default function getCroppedImageURL(url: string) {
    const delimiter = "media/";
    const index = url.indexOf(delimiter) + delimiter.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}