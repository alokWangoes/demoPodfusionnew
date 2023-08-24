"use client"
import React, { useState } from "react"
import "./subscription-plan.css"

const SubscriptionPlan = () => {
  const [yearToggle, setYearToggle] = useState<boolean>(true)
  return (
    <div className="subscription-plan-container" id="subscribe-wrapper">
      <div className="container">
        <div className="row main-pricing">
          <div className="col-md-12 col-xl-12 col-sm-12">
            <h3>Choose the Plan that Fits Your Business</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Id vitae semper sed risus.
          </p>
        </div>

        <div className="switch-wrapper">
          <input id="monthly" type="radio" name="switch" checked />
          <input id="yearly" type="radio" name="switch" />
          <label
            htmlFor="monthly"
            className="monthly-label"
            id="month-label"
            onClick={() => setYearToggle(true)}
          >
            {yearToggle === false && "Monthly"}
          </label>
          <label
            htmlFor="yearly"
            className="yearly-label"
            onClick={() => setYearToggle(false)}
          >
            {yearToggle === true && "Yearly"}
          </label>
          <span className="highlighter"></span>
        </div>
      </div>
      <div className="container">
        <div className="row pricing-wrapper">
          <div className="col-md-3 col-sm-6 col-xs-12 ">
            <div className="pricingTable">
              <div className="bg-ellipse">
                <div className="pricingTable-header">
                  <span className="currency">$</span>
                  <span className="amount">0</span>
                  <span className="duration">Monthly</span>
                  <div className="price-value">
                    <span>Free</span>
                    <span className="line-1">
                      <hr />
                    </span>
                  </div>
                </div>
                <ul className="pricing-content">
                  <li>5 daily tasks ( Uplaod, Design, Product, etc...)</li>
                  <li>
                    No need to download anything, it runs completely in the
                    cloud.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Consequat
                    pellentesque magna et amet.
                  </li>
                </ul>
                <div className="pricingTable-signup">
                  <button className="try-now-btn">Try Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="pricingTable">
              <div className="bg-ellipse-premium">
                <div className="pricingTable-header">
                  <span className="currency">$</span>
                  <span className="amount">9.99</span>
                  <span className="duration">Monthly</span>
                  <div className="price-value-premium">
                    <span>Premium</span>
                    <span className="line-1">
                      <hr />
                    </span>
                  </div>
                </div>
                <ul className="pricing-content-second-child">
                  <li>5 daily tasks ( Uplaod, Design, Product, etc...)</li>
                  <li>Access to all marketplaces</li>
                  <li>Basic support</li>
                  <li>
                    No need to download anything, it runs completely in the
                    cloud.
                  </li>
                </ul>

                <div className="pricingTable-signup-premium">
                  <button className="try-now-btn-premium">Try Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="pricingTable" id="pro-table">
              <div className="bg-ellipse-pro">
                <div className="pricingTable-header">
                  <span className="currency">$</span>
                  <span className="amount-pro">19.99</span>
                  <span className="duration">Monthly</span>
                  <div className="price-value-pro">
                    <span>Pro</span>
                    <span className="best-seller">
                      <p>Best Seller</p>
                    </span>
                    <span className="line-1">
                      <hr />
                    </span>
                  </div>
                </div>
                <ul className="pricing-content-third-child">
                  <li>150 Daily tasks ( Upload, Design,Product.. etc.)</li>
                  <li>
                    In a post-apocalyptic world, a determined protagonist
                    embarks on a perilous journey, battling enemies and forging
                    unlikely alliances in search of sanctuary.
                  </li>
                  <li>3 days guarantee support</li>
                  <li>
                    Automatically check your listing for trademark infringement
                  </li>
                  <li>One more: Access to all marketplaces</li>
                </ul>

                <div className="pricingTable-signup-pro">
                  <button className="try-now-btn-pro">Try Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="pricingTable">
              <div className="bg-ellipse-enterprise">
                <div className="pricingTable-header">
                  <span className="currency">$</span>
                  <span className="amount">49.99</span>
                  <span className="duration">Monthly</span>
                  <div className="price-value-enterprise">
                    <span>Enterprise</span>
                    <span className="line-1">
                      <hr />
                    </span>
                  </div>
                </div>
                <ul className="pricing-content-fourth-child">
                  <li>Unlimited daily tasks</li>
                  <li>
                    Boost productivity and quality with production automation`s
                    efficiency and precision
                  </li>
                  <li>API Access</li>
                  <li>
                    Automatically check your listing for trademark infringement
                  </li>
                  <li>One more: Access to all marketplaces</li>
                  <li>
                    No need to download anything, runs completely in the cloud
                  </li>
                  <li>24h support</li>
                </ul>
                <div className="pricingTable-signup-enterprise">
                  <button className="try-now-btn-enterprise">Try Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionPlan
