import windows from "../assets/windows.png";
import bg from "../assets/heroimage.jpg";

const Hero = () => {
  return (
    <div>
      <img
        src={bg}
        className="
          fixed -z-1
          h-[155vw] md:h-[40vw] lg:h-[35vw]
          w-full
          object-cover
          transition-all
        "
      />
      <div
        className="
        w-[80%] ml-[10%]
        lg:w-[70%] lg:ml-[15%]
        grid md:grid-cols-2 gap-20
        justify-center align-center
        pt-25
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
          text-shadow-black
        "
        >
          <h1
            className="
            text-lg lg:text-3xl
            font-bold
            text-nowrap
          "
          >
            Windows Server 2019
          </h1>
          <p
            className="
            lg:text-lg
          "
          >
            A server operating system designed as a cloud-ready platform,
            focusing on security and enabling hybrid cloud scenarios by
            connecting on-premises environments with Azure services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
