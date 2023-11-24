import gallery1 from "../assests/Images/Rectangle 90.png";
import gallery2 from "../assests/Images/Rectangle 91.png";
import gallery3 from "../assests/Images/Rectangle 95.png";
import gallery4 from "../assests/Images/Rectangle 97.png";
import gallery5 from "../assests/Images/Rectangle 96.png";
const Gallery = () => {
  return (
    <div className="container py-5">
      <div className="headingBox d-flex justify-content-between align-items-center">
        <div className="heading1">
          Our <span>maldives</span> <br /> Trip Gallery
        </div>
      </div>
      <div
        className="galleryMainBox pt-4"
        style={{ justifyContent: "flex-start" }}
      >
        <div className="galleryBox">
          <img src={gallery1} alt="Gallery" className="galleryImageMedium" />
          <img src={gallery2} alt="Gallery" className="galleryImageSmall" />
        </div>
        <div className="galleryBox">
          <img src={gallery3} alt="Gallery" className="galleryImageLarge" />
        </div>
        <div className="galleryBox">
          <img src={gallery4} alt="Gallery" className="galleryImageSmall" />
          <img src={gallery5} alt="Gallery" className="galleryImageMedium" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
