import Link from "next/link"

const NavigationBar = () => {
    return (
        <div className="row">
        <div className="col-md-3 col-xl-3"></div>
        <div className="bottom-wrp col-md-6 col-xl-6">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">How it works</Link>
              <img
                src="/flat-color-icons_settings.svg"
                alt="icon-settign"
              />
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Products</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-xl-3"></div>
      </div>
    )
}

export default NavigationBar;