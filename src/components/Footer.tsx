import Logo from './../assets/icons/logo.svg';
import FacebookIcon from './../assets/icons/facebook.svg';
import TwitchIcon from './../assets/icons/Vector.svg';
import LinkedinIcon from './../assets/icons/linkedin.svg';
import GithubIcon from './../assets/icons/github.svg';

const Footer = () => {
  return (
    <footer className="pt-[56px] bg-darkBlack">
      <div className="">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex items-center gap-4">
            <img src={Logo} alt="" />
            <p className="text-[30px] text-white text-bold">Excursy</p>
          </div>
          <div className="flex gap-6 py-[40px]">
            <img src={FacebookIcon} alt="facebook" />
            <img src={TwitchIcon} alt="twitch" />
            <img src={LinkedinIcon} alt="linkedin" />
            <img src={GithubIcon} alt="github" />
          </div>
          <nav className="pb-[40px]">
            <ul className="flex gap-[40px]">
              <li>
                <a href="#" className="text-lg text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-white">
                  Our interests
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-white">
                  Values
                </a>
              </li>
              <li>
                <a href="#" className="text-lg text-white">
                  Current Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
