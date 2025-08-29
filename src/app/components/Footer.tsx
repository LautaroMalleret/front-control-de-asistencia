import React from "react";
const Footer = () => {
  return (
    <footer className=" text-center p-4 mt-auto border-t">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
export default Footer;