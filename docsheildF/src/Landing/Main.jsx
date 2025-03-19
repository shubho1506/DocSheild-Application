// import { useNavigate } from "react-router-dom";

// function Main() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Welcome to Decentralized Document Notarization</h1>
//       <button onClick={() => navigate("/login")}>Login</button>
//       <button onClick={() => navigate("/signup")}>Signup</button>
//     </div>
//   );
// }

// export default Main;

// import Link from "next/link"
// import Image from "next/image"
import { Shield, FileCheck, Lock, Clock, ChevronRight, FileText } from "lucide-react"
import { Button } from "../components/ui/button"
import "./Landing.css"
import { Link, useNavigate } from "react-router-dom";


export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <Shield className="logo-icon" />
            <span>DocShield</span>
          </div>
          <div className="nav-container">
            <nav className="nav">
              <Link href="#features" className="nav-link">
                Features
              </Link>
              <Link href="#how-it-works" className="nav-link">
                How It Works
              </Link>
              <Link href="#pricing" className="nav-link">
                Pricing
              </Link>
              {/* <Link >  */}
              {/* href="/login" */}
                <Button variant="outline" className="login-button" onClick={() => navigate("/login")}>
                  Login
                </Button>
              {/* </Link> */}
              {/* <Link > */}
              {/* href="/signup" */}
                <Button className="signup-button" onClick={() => navigate("/signup")} >Sign Up</Button>
              {/* </Link> */}
            </nav>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="hero-section">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="hero-text">
                  <h1 className="hero-title">Secure Document Notarization with Blockchain Technology</h1>
                  <p className="hero-description">
                    DocShield provides tamper-proof document verification and notarization using blockchain, ensuring
                    your documents remain secure, verifiable, and legally binding.
                  </p>
                </div>
                <div className="hero-buttons">
                  {/* <Link href="/signup"> */}
                    <Button size="lg" className="get-started-button"  onClick={() => navigate("/signup")}>
                      Get Started
                      <ChevronRight className="button-icon" />
                    </Button>
                  {/* </Link> */}
                  {/* <Link href="#how-it-works"> */}
                    <Button size="lg" variant="outline" className="learn-more-button">
                      Learn More
                    </Button>
                  {/* </Link> */}
                </div>
              </div>
              <div className="hero-image-container">
                {/* <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="DocShield Platform"
                  className="hero-image"
                /> */}
                <img 
                    // src="/placeholder.svg" 
                    src="/placeholder.svg"
                    width="550" 
                    height="550" 
                    alt="DocShield Platform" 
                    className="hero-image" 
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <div className="section-header">
              <div className="section-title-container">
                <h2 className="section-title">Why Choose DocShield</h2>
                <p className="section-description">
                  Our blockchain-powered platform offers unmatched security and reliability for your document
                  notarization needs.
                </p>
              </div>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-container">
                  <Lock className="feature-icon" />
                </div>
                <h3 className="feature-title">Tamper-Proof Security</h3>
                <p className="feature-description">
                  Documents are cryptographically sealed on the blockchain, making them impossible to alter without
                  detection.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-container">
                  <FileCheck className="feature-icon" />
                </div>
                <h3 className="feature-title">Instant Verification</h3>
                <p className="feature-description">
                  Verify the authenticity of any document in seconds with our simple verification process.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-container">
                  <Clock className="feature-icon" />
                </div>
                <h3 className="feature-title">Permanent Record</h3>
                <p className="feature-description">
                  Documents notarized on the blockchain create a permanent, immutable record that lasts forever.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works-section">
          <div className="container">
            <div className="section-header">
              <div className="section-title-container">
                <h2 className="section-title">How DocShield Works</h2>
                <p className="section-description">
                  Our simple three-step process makes document notarization secure and effortless.
                </p>
              </div>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 className="step-title">Upload</h3>
                <p className="step-description">
                  Upload your document to our secure platform. We support all major file formats.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3 className="step-title">Notarize</h3>
                <p className="step-description">
                  We create a unique cryptographic hash of your document and record it on the blockchain.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3 className="step-title">Verify</h3>
                <p className="step-description">
                  Receive a verification certificate that anyone can use to confirm your document's authenticity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <div className="section-header">
              <div className="section-title-container">
                <h2 className="section-title">Simple, Transparent Pricing</h2>
                <p className="section-description">Choose the plan that works for your document notarization needs.</p>
              </div>
            </div>
            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3 className="pricing-title">Basic</h3>
                  <p className="pricing-subtitle">For individuals with occasional notarization needs</p>
                </div>
                <div className="pricing-price">
                  $9.99<span className="pricing-period">/month</span>
                </div>
                <ul className="pricing-features">
                  <li className="pricing-feature">
                    <FileText className="pricing-feature-icon" />
                    <span>10 documents per month</span>
                  </li>
                  <li className="pricing-feature">
                    <FileText className="pricing-feature-icon" />
                    <span>Email verification certificates</span>
                  </li>
                  <li className="pricing-feature">
                    <FileText className="pricing-feature-icon" />
                    <span>30-day document history</span>
                  </li>
                </ul>
                <div className="pricing-action">
                  {/* <Link href="/signup?plan=basic"> */}
                    <Button className="pricing-button" onClick={() => navigate("/signup")}>Get Started</Button>
                  {/* </Link> */}
                </div>
              </div>
              <div className="pricing-card popular">
                <div className="popular-badge">Popular</div>
                <div className="pricing-header">
                  <h3 className="pricing-title">Professional</h3>
                  <p className="pricing-subtitle">For businesses with regular notarization needs</p>
                </div>
                <div className="pricing-price">
                  $29.99<span className="pricing-period">/month</span>
                </div>
                <ul className="pricing-features">
                  <li className="pricing-feature">
                    <FileText className="pricing-feature-icon" />
                    <span>50 documents per month</span>
                  </li>
                  <li className="pricing-feature">
                    <FileText className="pricing-feature-icon" />
                    <span>Custom verification certificates</span>
                  </li>
                  <li className="pricing-feature">
                    <FileText className="pricing-feature-icon" />
                    <span>1-year document history</span>
                  </li>
                  <li className="pricing-feature">
                    <FileText className="pricing-feature-icon" />
                    <span>API access</span>
                  </li>
                </ul>
                <div className="pricing-action">
                  {/* <Link href="/signup?plan=professional"> */}
                    <Button className="pricing-button" onClick={() => navigate("/signup")}>Get Started</Button>
                  {/* </Link> */}
                </div>
              </div>
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3 className="pricing-title">Enterprise</h3>
                  <p className="pricing-subtitle">For organizations with high-volume needs</p>
                </div>
                <div className="pricing-price">
                  Custom<span className="pricing-period">/month</span>
                </div>
                <ul className="pricing-features">
                  <li className="pricing-feature">
                    <FileText className="pricing-feature-icon" />
                    <span>Unlimited documents</span>
                  </li>
                  <li className="pricing-feature">
                    <FileText className="pricing-feature-icon" />
                    <span>White-labeled verification</span>
                  </li>
                  <li className="pricing-feature">
                    <FileText className="pricing-feature-icon" />
                    <span>Permanent document history</span>
                  </li>
                  <li className="pricing-feature">
                    <FileText className="pricing-feature-icon" />
                    <span>Advanced API integration</span>
                  </li>
                  <li className="pricing-feature">
                    <FileText className="pricing-feature-icon" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <div className="pricing-action">
                  <Link href="/contact">
                    <Button variant="outline" className="pricing-button-outline">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to secure your documents with blockchain technology?</h2>
              <p className="cta-description">
                Join thousands of individuals and businesses who trust DocShield for their document notarization needs.
              </p>
            </div>
            <div className="cta-buttons">
              {/* <Link href="/signup"> */}
                <Button size="lg" className="cta-signup-button" onClick={() => navigate("/signup")}>
                  Sign Up Now
                </Button>
              {/* </Link> */}
              {/* <Link href="/login" > */}
                <Button size="lg" variant="outline" className="cta-login-button" onClick={() => navigate("/login")}>
                  Login
                </Button>
              {/* </Link> */}
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="logo">
              <Shield className="logo-icon" />
              <span>DocShield</span>
            </div>
            <p className="footer-tagline">Secure document notarization powered by blockchain technology.</p>
          </div>
          <div className="footer-links">
            <div className="footer-links-column">
              <h3 className="footer-links-title">Product</h3>
              <ul className="footer-links-list">
                <li>
                  <Link href="#features" className="footer-link">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="footer-link">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-links-title">Company</h3>
              <ul className="footer-links-list">
                <li>
                  <Link href="#" className="footer-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-links-title">Legal</h3>
              <ul className="footer-links-list">
                <li>
                  <Link href="#" className="footer-link">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} DocShield. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="#" className="footer-bottom-link">
              Privacy Policy
            </Link>
            <Link href="#" className="footer-bottom-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}



