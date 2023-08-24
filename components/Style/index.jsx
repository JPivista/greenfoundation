import React from 'react'
import Script from 'next/script';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Tab Funcion
import 'react-tabs/style/react-tabs.css';

// Youtube Embedded
// import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

// Add All plugin files here 
// link min.js , popper.js etc,...
const index = () => {
  return (
    <>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous" />

    </>
  )
}

export default index