import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  // Destructuring props for better readability (optional)
  // const { className, href, onClick, children, px, white } = props;

  // Building button classes dynamically based on props
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 
                  ${px ? `px-${px}` : "px-7"}  // Padding based on px prop
                  ${
                    white ? "text-n-8" : "text-n-1"
                  }  // Text color based on white prop
                  ${className || ""}`; // Add any custom class passed as a prop

  // Classes for the button text container
  const spanClasses = "relative z-10";

  // Function to render a button element
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span> {/* Button text */}
      {ButtonSvg(white)} {/* Include ButtonSvg component conditionally */}
    </button>
  );

  // Function to render a link element
  const renderLink = () => (
    <a href={href} className={classes} download="Masego Dipela CV.pdf">
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  // Return the appropriate component based on the presence of href prop
  return href ? renderLink() : renderButton();
};

export default Button;
