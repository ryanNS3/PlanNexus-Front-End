import React from 'react'
import { UploadImageIcon } from '../../../assets/uploadImage';
import { useDropzone } from 'react-dropzone';


export function InputImage({value, setValue,file, id , ...props} ) {

  const onDrop = React.useCallback((file) =>{
    setValue(file)
    console.log(value)
  })

  const dropzone = useDropzone({
    onDrop,
    accept:{
      'image/png' : ['.png'],
      'image/jpg' : ['.jpg'],
      'image/svg' : ['.svg']

    }
  })
   
  if (file) return <div></div>
  return (
    <>
   
      <label htmlFor={id} className=' flex flex-col justify-center items-center h-full bg-cinza-100'  {...dropzone.getRootProps()}>
        <input  className='opacity-0 hidden' id={id}   type='file' {...dropzone.getInputProps()} {...props}/>
          <UploadImageIcon/>
          <p>Adicionar imagem</p>
      </label>
    </>
    )
    
}


export function InputFile({value, setValue, file, id, ...props}){

}
