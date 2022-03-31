import React, { useState } from 'react';
import './Summary.css';

const Summary = (props) => {
  
  const [id,setId] = useState(props.summaryId);
  const [message, setMessage] = useState("Summary Component");
  const [message2, setMessage2] = useState({
    "message": "M-1",
    "messageDate" : new Date()
  });
  
  /*
  const updateDate = () => {
    console.log(message2.messageDate);
    message2.messageDate = new Date();
    console.log(message2.messageDate);
    setMessage2(message2);
  };
  */
 
  return (  
    <div className="Summary">
      <strong>message:</strong> {message} - <strong>message2:</strong> {message2.message} - <strong>message-Date:</strong> {message2.messageDate.toLocaleString()}
      {
      //<br/><button onClick={() => updateDate()}>!!Update Date!!</button>
      }
      <br/><strong>id:</strong> {id}
    </div>
  );
}

export default Summary;
