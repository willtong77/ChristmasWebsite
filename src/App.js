// import Image from "./Image.js";
import StaticImages from "./Image/StaticImages.js"
import DynamicImage from "./Image/DynamicImage.js";
import { imageList } from "./Image/imageList.js"
import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function App() {
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("CLICK ME!!!!!")

  function handleClick() {
    setIndex(index < imageList.length - 1 ? index + 1 : 1);
    setMessage("");
  }

  let image = imageList[index];
  return (
    <div>
      <Helmet><style>{'body { background-color: lightblue; }'}</style></Helmet>
      <StaticImages/>
      <DynamicImage
        click={handleClick}
        icon={image}
      />

      <h1 style={{
        color:'red',
        textAlign:'center',
        verticalAlign:'center',
        marginTop:700
      }}>{message}</h1>
    </div>
  );
}