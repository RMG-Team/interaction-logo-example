import React from "react";

export default function Content() {
  return (
    <center>
      <div className="MainContent">
        <h3>Our Services:</h3>
        <p>
          Le lorem ipsum est, en imprimerie, une suite de mots sans
          signification utilisée à titre provisoire pour calibrer une mise en
          page, le texte définitif venant remplacer le faux-texte dès qu'il est
          prêt ou que la mise en page est achevée. Généralement, on utilise un
          texte en faux latin, le Lorem ipsum ou Lipsum
        </p>
        <img src={"siteLogo.png"} alt="ServicesLogo" className="Services" />
      </div>
    </center>
  );
}
