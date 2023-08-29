export const ProvidersLayer = () => {
  return (
    <div className="grid grid-cols-2 items-center mt-56 gap-10">
      <img src="/src/assets/trafalgar-illustration-sec2.svg" alt="providers" />
      <div className="text-left ml-20 mt-6">
        <p className="text-header text-5xl font-medium mb-9">
          Leading healthcare providers
        </p>
        <div className="mb-8 bg-black mr-[30rem] py-[1px] rounded-full"></div>
        <p className="text-small-header">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>
        <button className="py-[10px] mt-6 px-7 border font-medium text-[#458FF6] hover:text-white border-blue-500 bg-white hover:bg-[#458FF6] rounded-full text-left cursor-pointer transition-transform transform-gpu hover:scale-110">
          Learn more
        </button>
      </div>
    </div>
  );
};
