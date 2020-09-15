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
          <Logo />
          <h1>Cryto Tracker</h1>
          <p>
            Conocé las distintas cotizaciones de la divisa norteamericana en la
            Argentina de manera simple, elegante y efectiva.
          </p>
          <div className="store-buttons">
            <ImagePlayStore />
            {/* <ImageAppStore /> */}

            <div>
              <ImageAppStore />
            </div>
          </div>
        </div>
        <div className="col-lg-6 my-auto d-none d-lg-block d-xl-block">
          <div className="d-none d-lg-block d-xl-block">
            <Image />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
