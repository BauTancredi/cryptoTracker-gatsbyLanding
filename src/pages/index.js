import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import "../components/layout.css"

const IndexPage = () => (
  <>
    <SEO title="Crypto Tracker" />

    <div className="container vertical-center">
      <div className="row">
        <div className="col-lg-6">
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
        <div className="col-6">
          <img src="" alt="Logo" />
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
