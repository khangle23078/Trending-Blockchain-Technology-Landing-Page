import AboutImage from './../assets/images/About Us Illustration.png';
const AboutUs = () => {
  return (
    <section className="mt-[139px] mb-[158px]">
      <div className="layout-center">
        <div className="flex items-center gap-[30px]">
          <img src={AboutImage} alt="" />
          <div>
            <h3 className="text-[52px] font-extrabold">About Us</h3>
            <p className="py-[35px] max-w-[555px]">
              We generated names based on a multitude of factors and picked the
              one that resonated with us the most. Our founder first engaged
              with the blockchain in 2013
            </p>
            <div className="flex items-center bg-white ">
              <div className="py-[18px] pl-[28px] pr-[42px] border-r-[1px] border-primary">
                <p className="font-semibold text-darkGray text-xl">
                  Project Done
                </p>
                <p className="font-bold text-primary text-[40px]">600+</p>
              </div>
              <div className="py-[18px] pl-[40px] pr-[42px] border-r-[1px] border-primary">
                <p className="font-semibold text-darkGray text-xl">
                  Happy Clients
                </p>
                <p className="font-bold text-primary text-[40px]">900+</p>
              </div>
              <div className="py-[18px] pl-[40px] pr-[27px]">
                <p className="font-semibold text-darkGray text-xl">Employee</p>
                <p className="font-bold text-primary text-[40px]">30+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
