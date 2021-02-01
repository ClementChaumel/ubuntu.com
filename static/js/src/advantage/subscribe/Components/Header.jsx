import React from "react";

function Header() {
  const isLoggedIn = false;
  const handleLoginClick = () => {
    dataLayer.push({
      event: "GAEvent",
      eventCategory: "Advantage subscribe",
      eventAction: "Authentication",
      eventLabel: "Sign in",
      eventValue: undefined,
    });
  };

  return (
    <section className="p-strip--suru-topped u-no-padding--bottom">
      <div className="row">
        <div className="col-12 u-sv3">
          {isLoggedIn ? (
            <h1>Add machines to your subscription</h1>
          ) : (
            <>
              <h1>Subscribe to Ubuntu Advantage</h1>
              <p>
                If you have existing subscriptions or sales offers,{" "}
                <a href="/login" onClick={handleLoginClick}>
                  sign in
                </a>{" "}
                to see them.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
