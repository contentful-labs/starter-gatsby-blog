/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
function FileUpload({ setFile }) {
  // State to store uploaded file

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0])

    // Add code here to upload file to server
    // ...
  }

  return (
    <div id="upload-box">
      <input type="file" onChange={handleUpload} />
    </div>
  )
}

export default FileUpload
