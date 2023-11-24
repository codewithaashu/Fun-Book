import clientBox from "../assests/Images/Group 259.png";
import ratingBox from "../assests/Images/Group 259.png";
const ClientSay = () => {
  const clientSayDataArr = [
    { title: "19,000+", value: "Happy Travellers" },
    { title: "1,100+", value: "Successful Trips" },
    { title: "15+", value: "Expert Crews" },
    { title: "5+", value: "Years Experience" },
  ];
  const arr = [
    {
      content:
        "I recently had my dream vacation to Maldives. I booked with forever Maldives . Found them randomly on Instagram and they turned to be so trustworthy, professional and helpful. Everything was organised perfectly. They provide extra ordinary service and treat their customers so well. Since I was travelling with kids, Ramesh ji took extra care that everything goes hassle free and so it went❤️.",
      author: "Sundus Monis",
    },
    {
      content:
        "I recently had the pleasure of embarking on a journey with Forever Maldives to Phuket and Krabi, and I must say it was a good experience. From start to finish, their service was top-notch, and I wholeheartedly recommend them to anyone seeking a hassle-free and memorable travel adventure.",
      author: "Bharath U",
    },
    {
      content:
        "I planned my trip to Maldives with Forever Maldives. Being my first trip with them, I had quite a few questions about how everything would be managed and especially about the snorkelling trips. All my questions were met with patient and detailed responses. It turned out to be one of my best trips! The cool excursion guides took very good care of us. The food, stay and trips were awesome.",
      author: "Manshi Sinha",
    },
    {
      content:
        "Best Travel Company to book international tour packages or solo girls trips. I have visited a Maldives with my wife along the 40 Person and one of the kind hearted person Mr. Ramesh ji who never felt like a customer who always treated us as family members to give us great memories. Thanks Ramesh ji and forever Maldives team.",
      author: "Sagar Rastogi",
    },
  ];
  return (
    <>
      <div className="clientSayContainer">
        <div className="container">
          <center className="heading py-4 hm">
            What Our <span>Clients Say</span>
          </center>
          <div className="clientBoxContainer gap-3">
            {arr.map((curr, index) => {
              return (
                <div className="clientBox p-3 pt-0" key={index}>
                  <img src={clientBox} alt="Client Box" className=" my-3" />
                  <div className="clientBoxContent">
                    {curr.content} <br /> ~{curr.author}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row dataBoxContainer my-5 d-flex justify-content-center">
            {clientSayDataArr.map((currElem, index) => {
              return (
                <div
                  className="col-6 col-sm-6 col-md-3 col-lg-3 dataBox"
                  key={index}
                >
                  <div className="heading text-center">{currElem.title}</div>
                  <div className="title text-center">{currElem.value}</div>
                </div>
              );
            })}
          </div>
          <center>
            <button
              className="exploreBtn clientSayBtn "
              style={{ color: "#2959A1" }}
            >
              Book now
            </button>
          </center>
        </div>
      </div>
    </>
  );
};

export default ClientSay;
