import { Upload, FileText, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import "./submit-document.css"

export default function DocumentSubmissionPage() {
  return (
    <div className="document-submission-container">
      <div className="document-submission-content">
        <header className="submission-header">
          <h1 className="submission-title">Document Submission</h1>
          <p className="submission-description">
            Upload your document and provide the required information for processing and verification.
          </p>
        </header>

        <form className="submission-form">
          <div className="upload-section">
            <div className="upload-container">
              <div className="upload-area">
                <Upload className="upload-icon" />
                <h3 className="upload-title">Drag & Drop your file here</h3>
                <p className="upload-description">or click to browse your files</p>
                <input type="file" id="document-upload" className="file-input" />
                <Button type="button" className="browse-button">
                  Browse Files
                </Button>
              </div>
              <div className="upload-info">
                <FileText className="info-icon" />
                <div className="info-text">
                  <p className="info-title">Accepted file types:</p>
                  <p className="info-description">PDF, DOC, DOCX, JPG, PNG (Max size: 10MB)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-fields">
            <div className="form-group">
              <Label htmlFor="document-title" className="form-label">
                Document Title
              </Label>
              <Input
                type="text"
                id="document-title"
                placeholder="Enter document title"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <Label htmlFor="document-type" className="form-label">
                Document Type
              </Label>
              <select id="document-type" className="form-select" required>
                <option value="">Select document type</option>
                <option value="identification">Identification</option>
                <option value="financial">Financial</option>
                <option value="legal">Legal</option>
                <option value="medical">Medical</option>
                <option value="educational">Educational</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <Label htmlFor="document-description" className="form-label">
                Description
              </Label>
              <textarea
                id="document-description"
                placeholder="Enter a brief description of the document"
                className="form-textarea"
                rows="3"
              ></textarea>
            </div>

            <div className="form-group">
              <Label htmlFor="document-tags" className="form-label">
                Tags
              </Label>
              <Input
                type="text"
                id="document-tags"
                placeholder="Enter tags separated by commas"
                className="form-input"
              />
              <p className="input-help">Add relevant tags to help categorize your document</p>
            </div>

            <div className="form-group">
              <Label htmlFor="expiration-date" className="form-label">
                Expiration Date (if applicable)
              </Label>
              <Input type="date" id="expiration-date" className="form-input" />
            </div>
          </div>

          <div className="form-notice">
            <AlertCircle className="notice-icon" />
            <p className="notice-text">
              By submitting this document, you confirm that you have the right to share this content and agree to our{" "}
              <a href="/terms" className="notice-link">
                Terms of Service
              </a>
              .
            </p>
          </div>

          <div className="form-actions">
            <Button type="button" variant="outline" className="verify-button">
              <CheckCircle className="button-icon" />
              Verify Document
            </Button>
            <Button type="submit" className="submit-button">
              Submit Document
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

