import Logos from 'assets/image/logo.png';

const Logo = ({ id, ...props }) => {
  return (
    <div>
      <img src={Logos} alt="hero-image" className="w-72" />
    </div>
  );
};

export default Logo;
