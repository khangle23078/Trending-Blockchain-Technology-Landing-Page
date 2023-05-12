import Logo from './../assets/icons/logo.svg';

const Header = () => {
  return (
    <header className="pt-[56px]">
      <div className="layout-center">
        <div className="flex gap-[115px] item-center justify-between">
          <div className="flex items-center gap-[21px]">
            <img src={Logo} alt="Logo" />
            <h3 className="text-[30px] font-bold">Excursy</h3>
          </div>
          <div className="flex items-center gap-[79px]">
            <nav>
              <ul className="flex gap-[48px]">
                <li>
                  <a href="#home" className="text-primary font-bold">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="#interests">Our interests</a>
                </li>
                <li>
                  <a href="#values">Values</a>
                </li>
                <li>
                  <a href="#projects">Current Projects</a>
                </li>
              </ul>
            </nav>
            <a className="text-white font-bold bg-primary py-[16.5px] px-[42px] rounded-lg hover:cursor-pointer">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
