import React from 'react'
import { UploadImageIcon } from '../../../assets/uploadImage';
import { useDropzone } from 'react-dropzone';


export function InputImage({value, small=false,disabled=true, setValue,keyForImage,indexForColor, id , indice, ...props} ) {
  const onDrop = React.useCallback((file) =>{
    let files = [...value];
    files[indice].push({[keyForImage]:{file}})
    setValue(files)
  },[keyForImage])
  
  const dropzone = useDropzone({
    onDrop,
    accept:{
      'image/png' : ['.png'],
      'image/jpg' : ['.jpg'],
      'image/svg' : ['.svg']
      
    }
  })
  const {isDragActive} = dropzone;
  

//                                                          0-array 1-posicao 2-indice da cor 3-chave da cor 4-array de arquivos 5-arquivo 
    if (value[indice].length > 0) return <RenderImage file={value[indice][0][keyForImage].file[0]}/>
 
    
    return (
      <>
        <label htmlFor={id} className={`flex flex-col justify-center h-[500px] rounded-lg items-center border-dotted border-4  ${isDragActive ? "border-rosa-300" : "border-cinza-100" } hover:border-rosa-300`} 
          {...disabled ? null : {...dropzone.getRootProps()}} >
          {disabled ?
          <input id={id} disabled/>
          :
          <input  className='opacity-0 hidden' id={id} {...dropzone.getInputProps()} {...props}/>
          }
            <>
            <UploadImageIcon/>
            {!small &&  <p className=' max-w-[20ch] text-center'> <span className=' text-fun2'>Arraste</span> ou clique aqui para adicionar uma imagem</p>}

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
      <div>
        <img className='max-w-full object-cover' src={imageLink}/>
      </div>
    )
  }

