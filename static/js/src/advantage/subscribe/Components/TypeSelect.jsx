import React from "react";
import Image from "./Image.jsx";
import { useDispatch, useStore } from "../store/useStore.jsx";
import Section from "./Section.jsx";
import useGetState from "../hooks/useGetState.js";

function TypeSelect() {
  const {
    currentProduct: { type },
  } = useStore();
  const dispatch = useDispatch();

  const {
    type: { disabled, hidden },
  } = useGetState();

  const isMoreThanOneTypeEnabled =
    type === "physical" || type === "virtual" || type === "desktop";

  const externalLinks = {
    aws: (
      <a
        href="https://aws.amazon.com/marketplace/search/results?page=1&filters=VendorId&VendorId=e6a5002c-6dd0-4d1e-8196-0a1d1857229b&searchTerms=ubuntu+pro"
        className="p-link--external"
      >
        Ubuntu Pro on the AWS Marketplace
      </a>
    ),
    azure: (
      <a
        href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=Ubuntu%20Pro&page=1"
        className="p-link--external"
      >
        Ubuntu Pro on the Azure Marketplace
      </a>
    ),
  };

  const handleChange = (e) => {
    dispatch({ type: "SetType", value: e.target.value });
  };

  return (
    <Section disabled={disabled} hidden={hidden}>
      <div className="row" onChange={handleChange}>
        <div className="col-12">
          <h2 className="p-heading--three u-no-margin--bottom u-sv2">
            What are you setting up?
          </h2>
        </div>

        <div className="col-12 row--5-col">
          <div
            className={`p-card--radio ${
              type === "physical" ? "is-selected" : ""
            }`}
          >
            <Image
              url="https://assets.ubuntu.com/v1/fdf83d49-Server.svg"
              height="48"
              width="40"
            />
            <input
              autoComplete="off"
              type="radio"
              id="type_server"
              name="type-r"
              value="physical"
              data-unit-price="100000"
              data-product-name="server"
            />
            <label htmlFor="type_server">Servers</label>
          </div>

          <div
            className={`p-card--radio ${type === "aws" ? "is-selected" : ""}`}
          >
            <Image
              url="https://assets.ubuntu.com/v1/a82add58-profile-aws.svg"
              height="180"
              width="302"
            />
            <input
              autoComplete="off"
              type="radio"
              id="type_aws"
              name="type-r"
              value="aws"
            />
            <label htmlFor="type_aws">AWS instances</label>
          </div>

          <div
            className={`p-card--radio ${type === "azure" ? "is-selected" : ""}`}
          >
            <Image
              url="https://assets.ubuntu.com/v1/da9a1344-Microsoft-Azure-logo_stacked_transparent.png"
              height="183"
              width="640"
            />
            <input
              autoComplete="off"
              type="radio"
              id="type_azure"
              name="type-r"
              value="azure"
            />
            <label htmlFor="type_azure">Azure instances</label>
          </div>

          <div
            className={`p-card--radio ${
              type === "virtual" ? "is-selected" : ""
            }`}
          >
            <Image
              url="https://assets.ubuntu.com/v1/9ed50294-Virtual+machine.svg"
              height="48"
              width="59"
            />
            <input
              autoComplete="off"
              type="radio"
              id="type_other"
              name="type-r"
              value="virtual"
              data-unit-price="150000"
              data-product-name="virtual machine"
            />
            <label htmlFor="type_other">Other VMs</label>
          </div>

          <div
            className={`p-card--radio ${
              type === "desktop" ? "is-selected" : ""
            }`}
          >
            <Image
              url="https://assets.ubuntu.com/v1/4b732966-Laptop.svg"
              height="48"
              width="83"
            />
            <input
              autoComplete="off"
              type="radio"
              id="type_desktop"
              name="type-r"
              value="desktop"
              data-unit-price="50000"
              data-product-name="desktop"
            />
            <label htmlFor="type_desktop">Desktops</label>
          </div>
        </div>

        {(type === "aws" || type === "azure") && (
          <div
            className="col-12"
            style={{
              backgroundColor: "#f7f7f7",
              marginBottom: "1.5rem",
              padding: "1.5rem",
            }}
          >
            <span>
              You can buy {externalLinks[type]} at an hourly, per-machine rate,
              with all UA software features included. If you need tech support
              as well, <a href="/support/contact-us">contact us</a>.
            </span>
          </div>
        )}

        <div
          className={`col-12 ${!isMoreThanOneTypeEnabled ? "u-disabled" : ""}`}
        >
          <p>If you have more than one kind, you can add the others later.</p>
        </div>
      </div>
    </Section>
  );
}

export default TypeSelect;
