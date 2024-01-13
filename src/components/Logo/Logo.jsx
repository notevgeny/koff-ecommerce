import logo from "/src/assets/logo.svg";

export const Logo = (props) => (
  <>
    <a href="/" className={props.className}>
      <img src={logo} alt="logo" />
    </a>
  </>
);
