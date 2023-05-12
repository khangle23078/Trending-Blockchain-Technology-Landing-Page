import SlackLogo from './../assets/images/image 14.png';
import WoocommerceLogo from './../assets/images/image 15.png';
import AmazonLogo from './../assets/images/image 16.png';
import MicosoftLogo from './../assets/images/Microsoft Logo.png';

const Clients = () => {
  return (
    <section className="mt-[159px] mb-[139px]">
      <div className="layout-center">
        <div className="flex items-center justify-center">
          <img
            src={SlackLogo}
            alt="slack"
            className="px-[48px] border-r-[1px] border-darkGray"
          />
          <img
            src={WoocommerceLogo}
            alt="woocommerce"
            className="px-[48px] border-r-[1px] border-darkGray"
          />
          <img
            src={AmazonLogo}
            alt="amazon"
            className="px-[48px] border-r-[1px] border-darkGray"
          />
          <img
            src={MicosoftLogo}
            alt="microsoft"
            className="px-[48px] border-r-[1px] border-darkGray"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
