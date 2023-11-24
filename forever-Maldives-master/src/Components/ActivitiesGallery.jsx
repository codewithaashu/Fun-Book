import gallery1 from "../assests/Images/Rectangle 90.png";
import gallery2 from "../assests/Images/Rectangle 91.png";
import gallery3 from "../assests/Images/Rectangle 95.png";
import gallery4 from "../assests/Images/Rectangle 97.png";
import gallery5 from "../assests/Images/Rectangle 96.png";
import gallery6 from "../assests/Images/Rectangle 32(2).png";
import gallery7 from "../assests/Images/Rectangle 32(3).png";
const ActivitiesGallery = () => {
  return (
    <div className="container py-4">
      <div className="py-4">
        <div className="activitiesGalleryHeading text-center mb-4">
          Our Maldives Activities Gallery
        </div>
        <div className="galleryMainBox">
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
      <div className="poolContainer py-4">
        <div className="poolBox">
          <div className="poolHeading py-2 px-3">Beach Villa with Pool</div>
          <img src={gallery6} alt="Pool" className="poolImage" />
        </div>
        <div className="poolBox">
          <div className="poolHeading py-2 px-3">Ocean Villa with Pool</div>
          <img src={gallery7} alt="Pool" className="poolImage" />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesGallery;
