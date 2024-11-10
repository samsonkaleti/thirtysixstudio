import React, { useEffect, useRef, useState } from 'react' 
import canvasImages from './canvasImages'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Canvas = ({startIndex}) => { 
    const [index , setIndex] = useState({value : startIndex})  
    const canvasRef = useRef(null,)  

    useGSAP(() => {
        gsap.to(index,{
            value : startIndex + 149, 
            duration : 3,
            repeat: -1,
            ease : 'linear',
           onUpdate : () =>{
            setIndex({value : Math.round(index.value)})
           }
        })
    })




    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d') 
        const img = new Image()
        img.src = canvasImages[index.value]; 
        img.onload = () => {
            canvas.width  = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }



        
       
    },[index]);
    
  return (
   <canvas id='canvas' ref={canvasRef} className='h-[18rem] w-[18rem]'>
       
   </canvas>
  )
}

export default Canvas