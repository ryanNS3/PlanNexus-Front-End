import React from 'react'
import { UploadImageIcon } from '../../../assets/uploadImage';
import { useDropzone } from 'react-dropzone';
import { Lock } from '../../../assets/Lock';
import { RemoveItems } from '../../Buttons/RemoveItems';


export function InputImage({value,disabled=true, onDrop, onRemoveImage, setValue,keyForImage, small=false ,indexForColor, id , indice, ...props} ) {
  
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
    if (value[indice][indexForColor]) return <RenderImage onRemove={onRemoveImage} file={value[indice][indexForColor][keyForImage].file[0]}/>
    
    return (
      <>
        <label htmlFor={id} className={`flex flex-col justify-center h-[500px] rounded-lg items-center border-dotted border-4 border-cinza-100  
          ${isDragActive ? "border-rosa-300" : "border-cinza-100", disabled ? "bg-cinza-50 border-cinza-100 hover:border-cinza-100" : "bg-transparent hover:border-rosa-300" } duration-100  `  }
          {...disabled ? null :  {...dropzone.getRootProps()}} >
          {disabled ?
          <>
            <input id={id} disabled/>
            <Lock black={true}/>
            <p className='text-center'>Selecione uma cor para adicionar imagens</p>
          </>
          :
          <>
            <input  className='opacity-0 hidden' id={id} {...dropzone.getInputProps()} {...props}/>
            <>
            <UploadImageIcon/>
            {!small &&  <p className=' max-w-[20ch] text-center'> <span className=' text-fun2'>Arraste</span> ou clique aqui para adicionar uma imagem</p>}
            </>
          </>
          }
        </label>
      </>
      )
      


  }

  export function RenderImage({file, onRemove }){

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
      <div >
        <RemoveItems  onRemove={onRemove} />
        <img className='max-w-full object-cover' src={imageLink}/>  
      </div>
    )
  }

