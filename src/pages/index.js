import React from "react"

import Image from "../components/image"
import ImagePlayStore from "../components/playStoreImage"
import ImageAppStore from "../components/appStoreImage"
import Logo from "../components/logo"

import SEO from "../components/seo"
import "../components/layout.css"

const IndexPage = () => (
  <>
    <SEO title="Crypto Tracker" />
    <div className="container text-align">
      <div className="row h-100">
        <div className="col-lg-6 my-auto">
          <div>
            <Logo />
          </div>
          <h1>Crypto Tracker</h1>
          <p>
            Track different crypto currencies prices in USD. Bitcoin, Ethereum,
            Litecoin, Stellar and more!
          </p>
          <div className="store-buttons">
            <ImagePlayStore />
            <div>
              <ImageAppStore />
            </div>
          </div>
        </div>
        <div className="col-lg-6 my-auto d-none d-lg-flex  ">
          <Image />
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
