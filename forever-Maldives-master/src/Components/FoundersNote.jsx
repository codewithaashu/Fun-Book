import foundersImg1 from "../assests/Images/Rectangle 9.png";
const FoundersNote = () => {
  return (
    <div className="container py-5 my-4 px-5" style={{ width: "maxContent" }}>
      <div className="foundersNoteContainer row py-4">
        <div className="leftContainer col-12 col-sm-12 col-md-7 col-lg-7">
          <img src={foundersImg1} alt="" className="foundersImg1Style" />
        </div>
        <div className="rightContainer col-12 col-sm-12 col-md-5 col-lg-5">
          <div>
            <div className="title pb-2">Founder’s Note</div>
            <p className="content">
              "Welcome to our virtual gateway of exploration! Embark on a
              journey with us as we unveil the wonders of the world.Our tourism
              website is more than a platform; it's a passport to extraordinary
              experiences. Get ready to wander, discover, and create memories
              that last a lifetime. Happy travels!" <br /> ~ Ramesh Mangoria
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersNote;
