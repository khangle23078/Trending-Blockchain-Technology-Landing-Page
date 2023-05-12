import HeroImage from './../assets/images/Frame.png';
import ArrowIcon from './../assets/icons/ic_outline-navigate-next.svg';

const Hero = () => {
  return (
    <section className="mt-[127px] mb-[159px]">
      <div className="layout-center">
        <div className="flex justify-between items-center gap-[91px]">
          <div>
            <div className="font-extrabold text-[56px] mb-9 max-w-[502px]">
              Let’s take a tour to{' '}
              <span className="text-primary">Blockchain</span> Technology
            </div>
            <p className="text-darkGray text-lg mb-[74px]">
              We are highly focused by blockchain technology that will lead
              positively to the future web.
            </p>
            <div className="flex items-center gap-8">
              <a
                href=""
                className="flex bg-primary items-center py-[21px] pl-[42.5px] pr-[74.5px] rounded-lg"
              >
                <p className="text-base font-bold text-white">Get Started</p>
                <img src={ArrowIcon} alt="" />
              </a>
              <a
                href=""
                className="border border-primary px-[60.5px] py-[21px] text-base font-bold rounded-lg"
              >
                Learn more
              </a>
            </div>
          </div>
          <div>
            <img src={HeroImage} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
