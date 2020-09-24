import React from "react";

function Header() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            Jessica Menius
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
