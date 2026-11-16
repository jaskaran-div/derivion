// Gallery items shown on /gallery, in display order.
//
// `src` is a Cloudinary URL (https://res.cloudinary.com/...) or a file in
// /public. Other hosts are blocked by the Content-Security-Policy in
// next.config.ts; allow a new host there first.
//
// - width/height: the file's real pixel size. They let the grid reserve the
//   right space before the image loads. If omitted, the item is laid out at
//   4:3 until it loads.
// - poster (videos only): an image shown before the video plays. For
//   Cloudinary videos it defaults to a frame of the video itself.
//
// TODO: the entries below are placeholders using existing site images.
// Replace them with the real gallery assets before deploying.

export type GalleryItem =
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      width?: number;
      height?: number;
    }
  | {
      type: "video";
      src: string;
      alt: string;
      caption?: string;
      poster?: string;
      width?: number;
      height?: number;
    };

/** Poster for a video: the given one, or a Cloudinary-generated frame. */
export function videoPoster(item: Extract<GalleryItem, { type: "video" }>) {
  if (item.poster) return item.poster;
  if (item.src.startsWith("https://res.cloudinary.com/") && item.src.includes("/video/upload/")) {
    // Cloudinary serves a still frame when the extension is changed to .jpg.
    return item.src.replace(/\.[a-z0-9]+(\?.*)?$/i, ".jpg");
  }
  return undefined;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { type: "video", src: "https://res.cloudinary.com/zafh1srl/video/upload/v1790855122/Battle_of_Traders_3.0.mp4", alt: "Derivion highlights video", caption: "Highlights" },
  { type: "video", src: "https://res.cloudinary.com/zafh1srl/video/upload/v1790855118/VID_20260921_114543924.mp4", alt: "Workshop at Derivion", caption: "Workshop" },
  { type: "image", src: "https://res.cloudinary.com/zafh1srl/image/upload/v1790855082/IMG_20260921_114621386.jpg", alt: "Students at a Derivion programme" },
  { type: "image", src: "https://res.cloudinary.com/zafh1srl/image/upload/v1790855078/IMG_20260921_114523465.jpg", alt: "Derivion learning activity" },
  { type: "image", src: "https://res.cloudinary.com/zafh1srl/image/upload/v1790855073/Derivion_-_Social_Media_Post_12.png", alt: "Case study discussion" },
  { type: "image", src: "/Home/about-4.png", alt: "Derivion team and learners" },
  { type: "image", src: "/Home/3rd.jpg", alt: "Derivion event photo" },
];
