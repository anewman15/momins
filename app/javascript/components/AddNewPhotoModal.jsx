import React from 'react'
import UploadPhotoForm from './UploadPhotoForm'

const AddNewPhotoModal = ({ galleryId }) => {
  return (
    <div>
      <div className="modal fade" id="upload-photo-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Upload Photo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body mb-0">
              <UploadPhotoForm galleryId={galleryId}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewPhotoModal