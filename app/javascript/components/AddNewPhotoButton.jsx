import React from 'react'

const AddNewPhotoButton = () => {
  return (
    <div className="position-fixed bottom-0 end-0 p-4">
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
