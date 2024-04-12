import React, { useState } from "react";
import InputComponent from "./InputComponent";
import BtnComponent from "./BtnComponent";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { UpdateUser, uploadMedia } from "../utils/APIRequest";
import { updateProfile } from "../Redux/UserSlice";
const EditModalContainer = ({
  openModal,
  setOpenModal,
  refresh,
  setRefresh,
}) => {
  //fetch user
  const user = useSelector((state) => state?.user?.user);
  //destructure the field of user
  const {
    profileUrl,
    firstName,
    lastName,
    instagramURL,
    twitterURL,
    facebookURL,
    profession,
    location,
  } = user;
  const [formData, setFormData] = useState({
    firstName,
    lastName,
    profession,
    location,
    instagramURL,
    twitterURL,
    facebookURL,
    profileUrl,
  });

  const [errorFormData, setErrorFormData] = useState({
    firstName: true,
    lastName: true,
    profession: true,
    location: true,
    instagramURL: true,
    twitterURL: true,
    facebookURL: true,
    profileUrl: true,
  });
  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const dispatch = useDispatch();

  const handleImageUpload = async (e) => {
    //if file size is larger
    if (e.target.files[0]?.size > 10485760) {
      return;
    }
    //otherwise upload
    setImgLoading(true);
    const imageURL = await uploadMedia(e.target.files[0]);
    setFormData({ ...formData, profileUrl: imageURL });
    setImgLoading(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const user = await UpdateUser(formData);
    setLoading(false);
    if (user) {
      //update user in redux global store
      dispatch(updateProfile(user));
      //refresh the page
      setRefresh(!refresh);
      //close modal
      setOpenModal(false);
    }
  };

  return (
    <>
      <div
        className={`bg-black px-5 py-8 absolute top-[1px] left-1/4 w-1/2
       ${!openModal ? "hidden" : "block"} rounded-md`}
      >
        <div className="flex justify-between">
          <h1 className="text-white text-lg font-semibold mb-4">
            Edit Profile
          </h1>
          <RxCross2
            className="text-xl font-bold cursor-pointer"
            onClick={() => setOpenModal(false)}
          />
        </div>
        <div className="flex flex-col gap-3">
          {imgLoading ? (
            <div className="mediaUploadLoader self-center"></div>
          ) : (
            <label className="relative  cursor-pointer self-center">
              <input
                type="file"
                onChange={(e) => handleImageUpload(e)}
                className="hidden"
              />
              <img
                src={formData.profileUrl}
                alt="Avatar"
                className="w-16 h-16 rounded-full object-cover"
              />
              <h1 className="text-white text-xs font-bold absolute bottom-2 left-3 ">
                Change
              </h1>
            </label>
          )}

          <div className="grid grid-cols-2 gap-3">
            <InputComponent
              label={"First Name"}
              inputType={"text"}
              placeholder={"First name"}
              field={"firstName"}
              formData={formData}
              setFormData={setFormData}
              errorFormData={errorFormData}
              setErrorFormData={setErrorFormData}
            />
            <InputComponent
              label={"Last Name"}
              inputType={"text"}
              placeholder={"Last name"}
              field={"lastName"}
              formData={formData}
              setFormData={setFormData}
              errorFormData={errorFormData}
              setErrorFormData={setErrorFormData}
            />
            <InputComponent
              label={"Profession"}
              inputType={"text"}
              placeholder={"Type your profession here.."}
              field={"profession"}
              formData={formData}
              setFormData={setFormData}
              isValidate={true}
              errorFormData={errorFormData}
              setErrorFormData={setErrorFormData}
            />
            <InputComponent
              label={"Location"}
              inputType={"text"}
              placeholder={"Enter your location"}
              field={"location"}
              formData={formData}
              setFormData={setFormData}
              isValidate={true}
              errorFormData={errorFormData}
              setErrorFormData={setErrorFormData}
            />
            <InputComponent
              label={"Instagram Profile"}
              inputType={"url"}
              placeholder={"Paste your Instagram Profile URL here..."}
              field={"instagramURL"}
              formData={formData}
              setFormData={setFormData}
              isValidate={true}
              errorFormData={errorFormData}
              setErrorFormData={setErrorFormData}
            />
            <InputComponent
              label={"Twitter Profile"}
              inputType={"url"}
              placeholder={"Paste your Twitter Profile URL here..."}
              field={"twitterURL"}
              formData={formData}
              setFormData={setFormData}
              isValidate={true}
              errorFormData={errorFormData}
              setErrorFormData={setErrorFormData}
            />
            <InputComponent
              label={"Facebook Profile"}
              inputType={"url"}
              placeholder={"Paste your Facebook Profile URL here..."}
              field={"facebookURL"}
              formData={formData}
              setFormData={setFormData}
              isValidate={true}
              errorFormData={errorFormData}
              setErrorFormData={setErrorFormData}
            />
          </div>
          <div className="w-fit self-end">
            <BtnComponent
              label={"Submit"}
              handleBtn={handleSubmit}
              loading={loading}
              active={
                Object.keys(errorFormData).every(
                  (curr) => errorFormData[curr] === true
                ) && !imgLoading
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModalContainer;
