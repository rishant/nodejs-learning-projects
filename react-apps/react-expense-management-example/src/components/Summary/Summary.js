import React, { useState } from 'react';
import './Summary.css';

const Summary = (props) => {
  
  const [id,setId] = useState(props.summaryId);
  const [message, setMessage] = useState("Summary Component");
  const [dummy, setDummy] = useState({
    "message": "M-1",
    "messageDate" : new Date()
  });
  
  const updateDate = (event) => {
    console.log(dummy.messageDate);
    dummy.messageDate = new Date();
    console.log(dummy.messageDate);
    //setDummy(dummy); // Not working Code
    setDummy({dummy}); // Working Code
    //setDummy({...dummy, messageDate: new Date()}); // Working Code
  };

  return (  
    <div className="Summary">
      <strong>message:</strong> {message} - <strong>message2:</strong> {dummy.message} - <strong>message-Date:</strong> {dummy.messageDate.toLocaleString()}
        <br/><button onClick={updateDate}>!!Update Date!!</button>
      <br/><b>id:</b> {id}
    </div>
  );
}

export default Summary;
