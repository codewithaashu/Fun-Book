import scene from "../assests/Images/Rectangle 4.png";
import collabOrganisation from "../assests/Images/iru_veli_white 1.svg";
import logo from "../assests/Images/fc7df1cc184248f0b38ae72f009a41eee0f1d6d1.png";
const Collaboration = () => {
  return (
    <div className="container py-4 d-flex flex-column">
      <div className="row collabCont">
        <div className="col-12 col-sm-12 col-md-5 ">
          <div className="collabLogoTitle">In Collaboration with</div>
          <div className="collabLogoBox">
            <img
              src={collabOrganisation}
              alt="collab organisation"
              className="collabLogo"
            />
            <img src={logo} alt="logo" className="collabLogo" />
          </div>
          <div className="collabLogoContent py-4">
            Welcome to Forever Maldives – where luxury meets the Maldivian
            paradise. Nestled on the pristine beaches of the Maldives, our
            resort is a haven of tranquility and indulgence. <br />
            Indulge in opulence with our exquisite range of accommodations. From
            overwater villas with direct access to the ocean to beachfront
            suites surrounded by tropical gardens, each room is meticulously
            designed for your comfort and pleasure.
            <br />
            Experience the Maldives like never before with our curated
            activities and excursions. Snorkel in vibrant coral reefs, embark on
            a sunset cruise, or simply soak up the sun on our private beaches.
            Adventure and relaxation await at Forever Maldives. <br /> Explore
            our exclusive packages designed to make your stay even more
            memorable. Whether it's a romantic getaway, a family vacation, or a
            special celebration, Forever Maldives offers tailored experiences
            for every occasion.
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-7 collabRightCont">
          <img src={scene} alt="scene" className="collabBgImage" />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
