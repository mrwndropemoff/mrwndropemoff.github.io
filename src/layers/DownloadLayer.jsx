export const DownloadLayer = () => {
  return (
    <div className="grid grid-cols-2 items-center mt-56 gap-10">
      <div className="text-left ml-20 mt-6 w-[430px]">
        <p className="text-header text-5xl font-medium mb-9">
          Download our mobile apps
        </p>
        <div className="mb-8 bg-black mr-[30rem] py-[1px] rounded-full"></div>
        <p className="text-small-header">
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <button className="py-[10px] mt-6 px-7 border font-medium text-[#458FF6] hover:text-white border-blue-500 bg-white hover:bg-[#458FF6] rounded-full text-left cursor-pointer transition-transform transform-gpu hover:scale-110">
          Download
        </button>
      </div>
      <img src="./src/assets/trafalgar-illustration-sec03.svg" alt="sec3" />
    </div>
  );
};
