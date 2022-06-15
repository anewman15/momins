import React from 'react'

const AddNewPhotoButton = () => {
  return (
  <div className="position-absolute bottom-0 end-0 py-5 mb-5">
    <button
      style={{ "fontSize": "3rem" }}
      type="button"
      className="bg-primary py-0 px-3 text-white border rounded-circle"
      data-bs-toggle="modal"
      data-bs-target="#upload-photo-modal"
    >
      +
    </button>
  </div>
  )
}

export default AddNewPhotoButton
