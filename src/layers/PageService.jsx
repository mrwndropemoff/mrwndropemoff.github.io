import { Service } from "../componants/Service";

export const PageService = () => {
  return (
    <div className="mt-52 ">
      <p className="text-4xl font-bold mb-7">Our services</p>
      <div className="mb-8 bg-black mx-[38rem] py-[1px] rounded-full"></div>
      <p className="text-small-header text-lg mx-44">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>

      <div className=" grid grid-cols-3 gap-x-8 mx-20 mt-20 ">
        <div className=" absolute right-[230px] bottom-[-750px]">
          <img src="src/assets/background/element-1.svg" alt="element-1" />
        </div>
        <div className=" absolute left-0 bottom-[-900px]">
          <img src="src/assets/background/bg-1.svg" alt="bg-1" />
        </div>
        <Service
          key="1"
          title="Search doctor"
          logo="src/assets/service-icons/search-doctor.svg"
          description="Choose your doctor from thousands of specialist, general, and trusted hospitals"
        />
        <Service
          key="2"
          title="Online pharmacy"
          logo="src/assets/service-icons/online-pharmacy.svg"
          description="Buy your medicines with our mobile application with a simple delivery system"
        />
        <Service
          key="3"
          title="Consultation"
          logo="src/assets/service-icons/consultation.svg"
          description="Free consultation with our trusted doctors and get the best recomendations"
        />
        <Service
          key="4"
          title="Details info"
          logo="src/assets/service-icons/details-info.svg"
          description="Free consultation with our trusted doctors and get the best recomendations"
        />
        <Service
          key="5"
          title="Emergency care"
          logo="src/assets/service-icons/emergency-care.svg"
          description="You can get 24/7 urgent care for yourself or your children and your lovely family"
        />
        <Service
          key="6"
          title="Tracking"
          logo="src/assets/service-icons/tracking.svg"
          description="Track and save your medical history and health data"
        />
      </div>
      <button className="py-[10px] mt-16 px-7 border font-medium text-[#458FF6] hover:text-white border-blue-500 bg-white hover:bg-[#458FF6] rounded-full text-left cursor-pointer transition-transform transform-gpu hover:scale-110">
        Learn more
      </button>
    </div>
  );
};
