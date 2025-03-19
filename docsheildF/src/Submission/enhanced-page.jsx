"use client"

import { useState } from "react"
import { Upload, FileText, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import DocumentPreview from "./document-preview"
import "./submit-document.css"

export default function DocumentSubmissionPage() {
  const [file, setFile] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    tags: "",
    expirationDate: "",
  })

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleRemoveFile = () => {
    setFile(null)
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id.replace("document-", "").replace("-date", "")]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("File:", file)
    console.log("Form data:", formData)
    // You would typically send this data to your server here
  }

  const handleVerify = () => {
    // Handle document verification
    console.log("Verifying document...")
    // This would typically trigger a verification process
  }

  return (
    <div className="document-submission-container">
      <div className="document-submission-content">
        <header className="submission-header">
          <h1 className="submission-title">Document Submission</h1>
          <p className="submission-description">
            Upload your document and provide the required information for processing and verification.
          </p>
        </header>

        <form className="submission-form" onSubmit={handleSubmit}>
          <div className="upload-section">
            <div className="upload-container">
              {!file ? (
                <div className="upload-area">
                  <Upload className="upload-icon" />
                  <h3 className="upload-title">Drag & Drop your file here</h3>
                  <p className="upload-description">or click to browse your files</p>
                  <input type="file" id="document-upload" className="file-input" onChange={handleFileChange} />
                  <Button type="button" className="browse-button">
                    Browse Files
                  </Button>
                </div>
              ) : (
                <DocumentPreview
                  fileName={file.name}
                  fileType={file.type}
                  fileSize={`${(file.size / (1024 * 1024)).toFixed(2)} MB`}
                  onRemove={handleRemoveFile}
                />
              )}
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
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <Label htmlFor="document-type" className="form-label">
                Document Type
              </Label>
              <select
                id="document-type"
                className="form-select"
                value={formData.type}
                onChange={handleInputChange}
                required
              >
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
                value={formData.description}
                onChange={handleInputChange}
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
                value={formData.tags}
                onChange={handleInputChange}
              />
              <p className="input-help">Add relevant tags to help categorize your document</p>
            </div>

            <div className="form-group">
              <Label htmlFor="expiration-date" className="form-label">
                Expiration Date (if applicable)
              </Label>
              <Input
                type="date"
                id="expiration-date"
                className="form-input"
                value={formData.expirationDate}
                onChange={handleInputChange}
              />
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
            <Button type="button" variant="outline" className="verify-button" onClick={handleVerify} disabled={!file}>
              <CheckCircle className="button-icon" />
              Verify Document
            </Button>
            <Button type="submit" className="submit-button" disabled={!file || !formData.title || !formData.type}>
              Submit Document
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

