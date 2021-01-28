import React from "react";

function UAShop() {
  return (
    <section className="p-strip--suru-topped js-shop-hero u-no-padding--bottom ">
      <div className="row">
        <div className="col-12 u-sv3">
          <h1>Subscribe to Ubuntu Advantage</h1>
          <p>
            If you have existing subscriptions or sales offers,
            <a
              href="{% if is_test_backend %}/login?test_backend=true{% else %}/login{% endif %}"
              onClick="dataLayer.push({ 'event' : 'GAEvent', 'eventCategory' : 'Advantage subscribe', 'eventAction' : 'Authentication', 'eventLabel' : 'Sign in', 'eventValue' : undefined });"
            >
              sign in
            </a>
            to see them.{" "}
          </p>
          <h1>Add machines to your subscription</h1>
        </div>
      </div>
    </section>
  );
}
export default UAShop;
