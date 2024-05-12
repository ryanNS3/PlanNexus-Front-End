import React from 'react'
import { UploadImageIcon } from '../../../assets/uploadImage';
import { useDropzone } from 'react-dropzone';


export function InputImage({value, small=false, setValue, id , indice, ...props} ) {
  const onDrop = React.useCallback((file) =>{
    let files = [...value];
    files[indice].push(file)
    setValue(files)
  },[])
  console.log(value[0].length)

  const dropzone = useDropzone({
    onDrop,
    accept:{
      'image/png' : ['.png'],
      'image/jpg' : ['.jpg'],
      'image/svg' : ['.svg']

    }
  })

    if (value[indice].length > 0) return <RenderImage file={value[indice][0][0]}/>
 
    
    return (
      <>
        <label htmlFor={id} className=' flex flex-col justify-center h-[500px] roudend items-center bg-cinza-100'  {...dropzone.getRootProps()}>
          <input  className='opacity-0 hidden' id={id} {...dropzone.getInputProps()} {...props}/>
            <>
            <UploadImageIcon/>
            {!small &&  <p className=' text-center'> <span className=' text-fun2'>Arraste</span> ou clique aqui para adicionar uma imagem</p>}

            </>
        </label>
      </>
      )
      


  }

  export function RenderImage({file}){

    const [imageLink, setImageLink] = React.useState();
  
      const image = file;
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageLink(reader.result);
      };
      if (image) {
        reader.readAsDataURL(image);
      }
  

    return(
      <img className='max-w-full object-cover' src={imageLink}/>
    )
  }



export function InputFile({value, setValue, file, id, ...props}){

}
