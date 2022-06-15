import React from 'react'

const GalleryItemModal = () => {
  return (
    <div className="modal fade" id="gallery-item-modal" tabIndex="-1" role="dialog" aria-labelledby="GalleryModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <img id="modal-image" style={{width: '100%'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryItemModal