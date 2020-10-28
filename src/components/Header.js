import React from "react";

export default function Header() {
  return (
    <div>
      <center>
        <div className="MainContent">
          <img src={"siteLogo.png"} alt="SiteLogo" className="Header" />
          <h3>This is my Header</h3>
          <p>
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée. Généralement, on
            utilise un texte en faux latin, le Lorem ipsum ou Lipsum
          </p>
        </div>
      </center>
    </div>
  );
}
