import BlockchainProductIcon from './../assets/icons/link 1.svg';
import QualityProductIcon from './../assets/icons/Star.svg';
import ViableProductIcon from './../assets/icons/plus-circle.svg';

const Interests = () => {
  return (
    <section className="mt-[158px]">
      <div className="layout-center">
        <h3 className="text-[52px] text-center font-bold ">Our Interests</h3>
        <p className="text-xl text-center text-darkGray pt-[35px] pb-[65px]">
          It's the norm these days to lay out a roadmap that gives stakeholders
          an indication of the direction that the project aspires to go.
          Inspired by Elon Musk’s 2006 masterplan, these are our skeleton
          ambitions.
        </p>
        <div className="flex items-center justify-between">
          <div className="bg-white pt-[45px] pl-[40px]">
            <div className="bg-[#FFEDE6] w-[70px] p-[12.38px] rounded-lg">
              <img src={BlockchainProductIcon} alt="" />
            </div>
            <h4 className="py-8 font-bold text-[28px]">Blockchain product </h4>
            <p className="max-w-[299px] mb-8">
              Create something novel that has never been done on the blockchain
              before Build a product
            </p>
            <a className="text-primary">Read More</a>
          </div>
          <div className="bg-white pt-[45px] pl-[40px]">
            <div className="bg-[#FFE1E9] w-[70px] p-[12.38px] rounded-lg">
              <img src={QualityProductIcon} alt="" />
            </div>
            <h4 className="py-8 font-bold text-[28px]">Blockchain product </h4>
            <p className="max-w-[299px] mb-8">
              Create something novel that has never been done on the blockchain
              before Build a product
            </p>
            <a className="text-primary">Read More</a>
          </div>
          <div className="bg-white pt-[45px] pl-[40px]">
            <div className="bg-[#DBF9ED] w-[70px] p-[12.38px] rounded-lg">
              <img src={ViableProductIcon} alt="" />
            </div>
            <h4 className="py-8 font-bold text-[28px]">Blockchain product </h4>
            <p className="max-w-[299px] mb-8">
              Create something novel that has never been done on the blockchain
              before Build a product
            </p>
            <a className="text-primary">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
