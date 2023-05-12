import OurValuesIllustration from './../assets/images/Our Values Illustration.png';

const Values = () => {
  return (
    <section className="mt-[140px]">
      <div className="layout-center">
        <div className="flex items-center gap-[69.14px]">
          <img src={OurValuesIllustration} alt="" />
          <div>
            <h3 className="text-[52px] font-extrabold">Our Values</h3>
            <p className="text-xl text-darkGray py-[35px]">
              anftw is a hallmark. The team members may change, but the quality
              of our project execution will not.An outstanding team can build a
              product in any industry. Don’t be intimidated by incumbents.
            </p>
            <a
              href=""
              className="bg-primary text-white font-semibold py-[14.5px] px-[35px] rounded-lg"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
