import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import "../components/layout.css"

const IndexPage = () => (
  <>
    <SEO title="Crypto Tracker" />

    <div className="container text-align">
      <div className="row h-100">
        <div className="col-lg-6 my-auto">
          <img src="" alt="Logo" />
          <h1>Cryto Tracker</h1>
          <p>
            Conocé las distintas cotizaciones de la divisa norteamericana en la
            Argentina de manera simple, elegante y efectiva.
          </p>
          <div>
            <button>App Store</button>
            <button>Play Store</button>
          </div>
        </div>
        <div className="col-lg-6 my-auto d-none d-lg-block .d-xl-block">
          <div className="d-none d-lg-block .d-xl-block">
            <Image />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
