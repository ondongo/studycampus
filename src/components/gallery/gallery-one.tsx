import Image, { StaticImageData } from "next/image";
import gallery_thumb_1 from "@/assets/img/gallary/gallary-thumb-1.jpg";
import gallery_thumb_2 from "@/assets/img/gallary/gallary-thumb-2.jpg";
import gallery_thumb_3 from "@/assets/img/gallary/gallary-thumb-3.jpg";
import gallery_thumb_4 from "@/assets/img/gallary/gallary-thumb-4.jpg";

function GalleryItem({img,id}:{img:StaticImageData;id:number}) {
  return (
    <div className={`tp-gallary-3-item-${id}`}>
      <Image src={img} alt="gallery-img" style={{ height: "auto" }} />
    </div>
  );
}

export default function GalleryOne() {
  return (
    <div className="gallary-area tp-gallary-3-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <GalleryItem img={gallery_thumb_1} id={1} />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <GalleryItem img={gallery_thumb_2} id={2} />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <GalleryItem img={gallery_thumb_3} id={3} />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <GalleryItem img={gallery_thumb_4} id={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
