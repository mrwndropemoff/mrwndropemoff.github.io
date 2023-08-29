export const PageMain = () => {
  return (
    <div className="flex flex-row pt-20 justify-between">
      <div className="self-center pr-28 text-left">
        <p className="text-header">Virtual healthcare for you</p>
        <p className="text-small-header py-6">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <button className="py-[10px] font-bold px-7 bg-[#458FF6] rounded-full text-left">
          <p className="text-white">Consult today</p>
        </button>
      </div>
      <img
        src="/src/assets/trafalgar-header-illustration.svg"
        alt="illustration"
        width="693px"
        height="598px"
      />
    </div>
  );
};
