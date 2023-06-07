import Profile from "../img/photo.jpeg";

export const Photo = () => {
  return (
    <div className=" flex justify-center ">
      <img src={Profile} alt="Photo" className=" w-1/2 md:w-72 rounded-2xl " />
    </div>
  );
};
