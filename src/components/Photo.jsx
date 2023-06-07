import Profile from "../img/photo.jpeg";

export const Photo = () => {
  return (
    <div className="flex justify-center relative">
      <img
        src={Profile}
        alt="Photo"
        className="w-1/2 md:w-72 rounded-2xl z-10"
      />
      <div className="absolute top-5 md:top-8 w-48 h-full right-20 md:w-72 md:right-32 border-4 border-blue-500 rounded-2xl"></div>
    </div>
  );
};
