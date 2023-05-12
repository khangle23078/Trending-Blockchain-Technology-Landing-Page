import ExpectationsLoverImg from './../assets/images/Frame 36898.png';
import BlockSpaceImg from './../assets/images/Frame 36898-2.png';
import ProxyImg from './../assets/images/Frame 36898-1.png';

const Projects = () => {
  return (
    <section className="mt-[179.81px] mb-[132px]">
      <div className="layout-center">
        <h3 className="text-center font-extrabold text-[52px] mb-[84px]">
          Current Projects
        </h3>
        <div className="flex items-center gap-[30px]">
          <div>
            <img
              src={ExpectationsLoverImg}
              alt="Certified Great Expectations Lover"
            />
            <h4 className="max-w-[263px] text-[28px] font-semibold mt-8">
              Certified Great Expectations Lover
            </h4>
            <p className="text-xl max-w-[355px] mt-6 text-darkGray">
              Certified Great Expectations Lover - To add value to
              <span className="text-primary"> Read more.</span>.
            </p>
          </div>
          <div>
            <img src={BlockSpaceImg} alt="BlockSpace - A solar System" />
            <h4 className="max-w-[263px] text-[28px] font-semibold mt-8">
              Certified Great Expectations Lover
            </h4>
            <p className="text-xl max-w-[355px] mt-6 text-darkGray">
              BlockSpace - We built the first ever accurate model of
              <span className="text-primary"> Read more.</span>.
            </p>
          </div>
          <div>
            <img src={ProxyImg} alt="0xProxy - A web 3.0 Website" />
            <h4 className="max-w-[263px] text-[28px] font-semibold mt-8">
              Certified Great Expectations Lover
            </h4>
            <p className="text-xl max-w-[355px] mt-6 text-darkGray">
              BlockSpace - This project was a collaborative exercise.
              <span className="text-primary"> Read more.</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
