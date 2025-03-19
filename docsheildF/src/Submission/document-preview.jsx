"use client"
import { X, FileText, ImageIcon, File } from "lucide-react"
import "./document-preview.css"

export default function DocumentPreview({ fileName, fileType, fileSize, onRemove }) {
  // Default values for demo
  fileName = fileName || "document-example.pdf"
  fileType = fileType || "application/pdf"
  fileSize = fileSize || "2.4 MB"

  const getFileIcon = () => {
    if (fileType.includes("pdf")) {
      return <FileText className="preview-file-icon" />
    } else if (fileType.includes("image")) {
      return <ImageIcon className="preview-file-icon" />
    } else {
      return <File className="preview-file-icon" />
    }
  }

  return (
    <div className="document-preview">
      <div className="preview-icon-container">{getFileIcon()}</div>
      <div className="preview-details">
        <p className="preview-filename">{fileName}</p>
        <p className="preview-fileinfo">
          {fileSize} • {fileType}
        </p>
      </div>
      <button type="button" className="preview-remove-button" onClick={onRemove} aria-label="Remove file">
        <X className="preview-remove-icon" />
      </button>
    </div>
  )
}

