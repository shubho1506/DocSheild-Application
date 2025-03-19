// import Link from "next/link"
// import Image from "next/image"
import { Button } from "../components/ui/button"
import { FileText, Upload, Shield, Database, LinkIcon, CheckCircle, Clock, Lock, ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom";
import "./how-it-works.css"

export default function HowItWorksPage() {
  const navigate = useNavigate();
  return (
    <div className="how-it-works-container">
      <header className="how-it-works-header">
        <div className="header-content">
          <h1 className="header-title">How Blockchain Document Notarization Works</h1>
          <p className="header-description">
            Our platform uses advanced blockchain technology to provide tamper-proof, verifiable document notarization
            that's legally binding and secure.
          </p>
        </div>
      </header>

      <section className="process-overview">
        <div className="section-container">
          <h2 className="section-title">The Notarization Process</h2>
          <p className="section-description">
            Our blockchain notarization process is simple, secure, and takes just minutes to complete.
          </p>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-icon-container">
                <Upload className="step-icon" />
              </div>
              <h3 className="step-title">Upload Document</h3>
              <p className="step-description">
                Upload your document through our secure platform. We support all major file formats including PDF, DOC,
                DOCX, JPG, and PNG.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-icon-container">
                <FileText className="step-icon" />
              </div>
              <h3 className="step-title">Document Processing</h3>
              <p className="step-description">
                Our system processes your document and creates a unique cryptographic hash that serves as a digital
                fingerprint.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-icon-container">
                <Database className="step-icon" />
              </div>
              <h3 className="step-title">Blockchain Recording</h3>
              <p className="step-description">
                The document's hash is recorded on the blockchain, creating a permanent, immutable record of your
                document at that point in time.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-icon-container">
                <Shield className="step-icon" />
              </div>
              <h3 className="step-title">Certificate Generation</h3>
              <p className="step-description">
                You receive a verification certificate with a unique blockchain identifier that can be used to prove the
                document's authenticity.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-icon-container">
                <CheckCircle className="step-icon" />
              </div>
              <h3 className="step-title">Verification</h3>
              <p className="step-description">
                Anyone can verify the document's authenticity by checking its hash against the blockchain record using
                our verification tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="blockchain-explainer">
        <div className="section-container">
          <div className="explainer-grid">
            <div className="explainer-content">
              <h2 className="section-title">The Power of Blockchain Technology</h2>
              <p className="section-description">
                Blockchain provides an unprecedented level of security and trust for document notarization.
              </p>

              <div className="blockchain-features">
                <div className="blockchain-feature">
                  <div className="feature-icon-container">
                    <Lock className="feature-icon" />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Immutable Records</h3>
                    <p className="feature-description">
                      Once recorded on the blockchain, document records cannot be altered or deleted, ensuring permanent
                      proof of existence.
                    </p>
                  </div>
                </div>

                <div className="blockchain-feature">
                  <div className="feature-icon-container">
                    <Clock className="feature-icon" />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Timestamped Proof</h3>
                    <p className="feature-description">
                      Each document is timestamped on the blockchain, providing cryptographic proof of when the document
                      existed in that exact state.
                    </p>
                  </div>
                </div>

                <div className="blockchain-feature">
                  <div className="feature-icon-container">
                    <LinkIcon className="feature-icon" />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">Decentralized Verification</h3>
                    <p className="feature-description">
                      The blockchain's decentralized nature means verification doesn't rely on a single authority,
                      increasing trust and reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="explainer-diagram">
              <div className="diagram-container">
                <h3 className="diagram-title">How Blockchain Secures Your Document</h3>
                <div className="diagram-image-container">
                  {/* <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Blockchain document security diagram"
                    width={500}
                    height={400}
                    className="diagram-image"
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
                <div className="diagram-legend">
                  <div className="legend-item">
                    <div className="legend-color document-color"></div>
                    <span className="legend-text">Your Document</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color hash-color"></div>
                    <span className="legend-text">Cryptographic Hash</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color blockchain-color"></div>
                    <span className="legend-text">Blockchain</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="verification-process">
        <div className="section-container">
          <h2 className="section-title">Document Verification Process</h2>
          <p className="section-description">
            Verifying a document's authenticity is simple and can be done by anyone with access to the verification
            certificate.
          </p>

          <div className="verification-steps">
            <div className="verification-step">
              <div className="vstep-number">1</div>
              <div className="vstep-content">
                <h3 className="vstep-title">Access Verification Tool</h3>
                <p className="vstep-description">
                  Visit our verification page or use our API to initiate the verification process.
                </p>
              </div>
            </div>

            <div className="verification-step">
              <div className="vstep-number">2</div>
              <div className="vstep-content">
                <h3 className="vstep-title">Upload Document or Enter Certificate ID</h3>
                <p className="vstep-description">
                  Either upload the document to be verified or enter the unique certificate ID provided during
                  notarization.
                </p>
              </div>
            </div>

            <div className="verification-step">
              <div className="vstep-number">3</div>
              <div className="vstep-content">
                <h3 className="vstep-title">Automatic Blockchain Check</h3>
                <p className="vstep-description">
                  Our system calculates the document's hash and checks it against the blockchain record.
                </p>
              </div>
            </div>

            <div className="verification-step">
              <div className="vstep-number">4</div>
              <div className="vstep-content">
                <h3 className="vstep-title">Verification Result</h3>
                <p className="vstep-description">
                  Receive instant confirmation of the document's authenticity, timestamp, and blockchain record.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="technical-details">
        <div className="section-container">
          <div className="technical-header">
            <h2 className="section-title">Technical Details</h2>
            <p className="section-description">
              For those interested in the technical aspects of our blockchain notarization process.
            </p>
          </div>

          <div className="technical-grid">
            <div className="technical-card">
              <h3 className="technical-card-title">Hashing Algorithm</h3>
              <p className="technical-card-description">
                We use SHA-256 cryptographic hashing to create a unique digital fingerprint of your document. This hash
                is a fixed-size string of characters that is unique to your document's content.
              </p>
            </div>

            <div className="technical-card">
              <h3 className="technical-card-title">Blockchain Implementation</h3>
              <p className="technical-card-description">
                Our platform utilizes Ethereum blockchain technology for document notarization. We use smart contracts
                to store document hashes and associated metadata in a transparent and immutable manner.
              </p>
            </div>

            <div className="technical-card">
              <h3 className="technical-card-title">Data Privacy</h3>
              <p className="technical-card-description">
                Only the document's hash is stored on the blockchain, not the document itself. This ensures your
                document's contents remain private while still providing verifiable proof of its existence and
                integrity.
              </p>
            </div>

            <div className="technical-card">
              <h3 className="technical-card-title">Verification Mechanism</h3>
              <p className="technical-card-description">
                Our verification process recalculates the document's hash and compares it with the hash stored on the
                blockchain. If they match, the document is verified as authentic and unchanged since notarization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-container">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">Is blockchain notarization legally binding?</h3>
              <p className="faq-answer">
                Yes, blockchain notarization is increasingly recognized as legally valid proof of document existence and
                integrity in many jurisdictions. Our certificates include all necessary information to establish legal
                validity.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">How long does the notarization process take?</h3>
              <p className="faq-answer">
                The entire process typically takes just a few minutes. Document hashing is instant, and blockchain
                confirmation usually takes 2-5 minutes depending on network conditions.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">What happens if my document changes after notarization?</h3>
              <p className="faq-answer">
                Any change to a document, no matter how small, will result in a completely different hash. During
                verification, this will show that the document has been modified since notarization.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Can I notarize multiple documents at once?</h3>
              <p className="faq-answer">
                Yes, our platform supports batch notarization for multiple documents. Each document receives its own
                unique hash and verification certificate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Notarize Your Documents?</h2>
            <p className="cta-description">
              Experience the security and convenience of blockchain document notarization today.
            </p>
            <div className="cta-buttons">
              {/* <Link href="/submit-document"> */}
                <Button className="cta-button">
                  Notarize Document
                  <ChevronRight className="button-icon" />
                </Button>
              {/* </Link> */}
              {/* <Link href="/verify"> */}
                <Button variant="outline" className="cta-button-secondary">
                  Verify Document
                </Button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

