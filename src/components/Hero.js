import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Hero = () => {
  return (
    <div className="hero wrapper">
      <div className="left">
        <img
          src="https://images.pexels.com/photos/2715287/pexels-photo-2715287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo of Woman With Blond Hair"
        />
      </div>
      <div className="mid">
        <h1>
          We’re all like snowflakes, all different in our own beautiful way.
        </h1>
        <Link to="/products">
          Shop now{" "}
          <span>
            <ArrowOutwardIcon className="icon" />
          </span>
        </Link>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/14610788/pexels-photo-14610788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Clear Sky over Woman Posing"
        />
        <img
          src="https://images.pexels.com/photos/3799361/pexels-photo-3799361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman in Knitted Sweater"
        />
        <img
          src="https://images.pexels.com/photos/2905823/pexels-photo-2905823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo Of Woman Tying Her hair"
        />
        <img
          src="https://images.pexels.com/photos/11608681/pexels-photo-11608681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Attractive Woman in Bra with Shoulder Straps Dropping "
        />
      </div>
    </div>
  );
};

export default Hero;
