import React from 'react'
import './Modal.css'

function Modal({show,closeModalHandler}) {
    return (
        <div class="modal-container">
            {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
            <div className="modal-wrapper"
                style={{
                    transform:show?'translateX(0)':'translateX(0)',
                    opacity:show?'1':'0'
                }}
            >
            
           <div className="modal-header">
                <p>Glad You Are Here</p>
                <span onClick={closeModalHandler} className="close-modal-btn">x</span>
           </div>
           <div className="modal-content">
               <div className="modal-body">
                   <h4>Modal</h4>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora labore fuga officiis. Odio sed esse porro corporis pariatur cumque.</p>
               </div>
               <div className="modal-footer">
                   <button onClick={closeModalHandler} className="btn-cancel">Close</button>
               </div>
           </div>
        </div>
        </div>
    )
}

export default Modal
