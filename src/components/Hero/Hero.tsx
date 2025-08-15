import windows from "../../assets/windows.png";

const Hero = () => {
  return (
    <div
      className="
        relative
        bg-linear-to-t from-blue-400 to-sky-200
      "
    >
      <div
        className="
        w-[80%] ml-[10%]
        lg:w-[70%] lg:ml-[15%]
        grid md:grid-cols-2 gap-20
        justify-center align-center
        pt-25 pb-10 md:pb-40
      "
      >
        <div
          className="
          flex justify-center
        "
        >
          <img
            src={windows}
            className="
            w-[50%] md:w-[50%]
            drop-shadow-xl
            drop-shadow-black/50
          "
          />
        </div>
        <div
          className="
          lg:w-[80%] lg:ml-[10%]
          flex flex-col gap-2
          justify-center
          text-center md:text-start
          text-white
          text-shadow-sm
          text-shadow-black/20
          "
        >
          <h1
            className="
            text-2xl lg:text-3xl
            font-bold
            text-nowrap
          "
          >
            Windows Server 2019
          </h1>
          <p
            className="
            text-lg lg:text-lg
            font-medium
          "
          >
            The operating system that bridges on-premises environments with
            Azure services enabling hybrid scenarios maximizing existing
            investments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
