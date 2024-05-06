import React from 'react'
import { UploadImageIcon } from '../../../assets/uploadImage';
import { useDropzone } from 'react-dropzone';


export function InputImage({value, small=false, setValue,file, id , ...props} ) {

  const onDrop = React.useCallback((file) =>{
    setValue(file[0])
  })

  

  const dropzone = useDropzone({
    onDrop,
    accept:{
      'image/png' : ['.png'],
      'image/jpg' : ['.jpg'],
      'image/svg' : ['.svg']

    }
  })
 

  
    return (
      <>
        <label htmlFor={id} className=' flex flex-col justify-center h-[500px] roudend items-center bg-cinza-100'  {...dropzone.getRootProps()}>
          <input  className='opacity-0 hidden' id={id}   type='file' {...dropzone.getInputProps()} {...props}/>
            {!small &&
            <>
              <UploadImageIcon/>
              <p>Adicionar imagem</p>
            
            </>
            
            }
        </label>
      </>
      )
      


  }



export function InputFile({value, setValue, file, id, ...props}){

}
