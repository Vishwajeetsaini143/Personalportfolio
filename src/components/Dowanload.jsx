import React from 'react'

const Dowanload= () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('VISHWAJEETRESUME.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = "VISHWAJEETRESUME.pdf";
                alink.click();
            })
        })
    }
  return (
    <div  className='dowanload'>
        <button onClick={onButtonClick}>DOWNLOAD PDF</button>
    </div>
  )
}

export default Dowanload