import React, { useState } from 'react';
import Modal from './components/modal/Modal';

function App() {
  const [show, setShow] = useState(false)
  const closeModalHandler = () => setShow(false);

  return (
    <div>
      <button onClick={()=>setShow(true)} className="btn-openModal">Open Modal</button>
      <Modal show={show} closeModalHandler={closeModalHandler}/>
    </div>
  );
}

export default App;
