import callout from "../callout.jpg";
import info from "../info.jpg";

const LeaderBoardRaised = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center right-area position-relative d-flex justify-content-around gap-3 gap-xxl-6 align-items-center">
        <div className="text-center">
          <img src={callout} className="mb-2 mx-2 icon-call-img" alt="logo" />
          <span className="text">$ 348,000 raised</span>
        </div>
        <div className="text-center">
          <img src={info} className="mb-2 mx-2 icon-info-img" alt="logo" />
          <span className="text">348 Call </span>
        </div>
        <div className="text-center">
          <img src={info} className="mb-2 mx-2 icon-info-img" alt="logo" />
          <span className="text">34 Tuncket</span>
        </div>
      </div>
      <div className="mt-4  boardRaisedBtGroup">
        <div>
          <div className="boardRaisedBtn boardRaisedBtnActive">
            Peoples Champion
          </div>
        </div>
        <div>
          <div className="boardRaisedBtn">Most Called out</div>
        </div>
        <div>
          <div className="boardRaisedBtn">Biggest Backers</div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoardRaised;
