import React, { useState } from 'react';
import Log from '../Log/log';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className='logContainer'>
        {!isSubmitted ? (
          <Log submitForm={submitForm} />
        ) : (
          <Log />
        )    }
      </div>
    </>
  );
};

export default Form;