import React from 'react';
import { UploadImageIcon } from '../../../assets/uploadImage';
import { useDropzone } from 'react-dropzone';
import { Lock } from '../../../assets/Lock';
import { RemoveItems } from '../../Buttons/RemoveItems';

export function InputImage({
  value,
  disabled = true,
  onDrop,
  onRemoveImage,
  keyForImage,
  error,
  small = false,
  indexForColor,
  id,
  indice,
  ...props
}) {
  const dropzone = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/svg': ['.svg'],
    },
    disabled,
  });

  const { isDragActive } = dropzone;

  const images = value[indice] && value[indice][indexForColor] ? value[indice][indexForColor][keyForImage] : null;

  if (images && images.file.length > 0) {
    return <RenderImage onRemove={onRemoveImage} file={images.file[0]} />;
  }

  return (
    <div>
      <label
        htmlFor={id}
        className={`flex flex-col justify-center h-[500px] rounded-lg items-center border-dotted border-4 
          ${isDragActive ? 'border-rosa-300' : 'border-cinza-100'} 
          ${disabled ? 'bg-cinza-50 border-cinza-100 hover:border-cinza-100' : 'bg-transparent hover:border-rosa-300'}
          ${error ? 'border-vermelho-300' : ''} duration-100`}
        {...(!disabled && dropzone.getRootProps())}
      >
        {disabled ? (
          <>
            <input id={id} disabled />
            <Lock black={true} />
            <p className="text-center">Selecione uma cor para adicionar imagens</p>
          </>
        ) : (
          <>
            <input className="opacity-0 hidden" id={id} {...dropzone.getInputProps()} {...props} />
            <UploadImageIcon />
            {!small && (
              <p className="max-w-[20ch] text-center">
                <span className="text-fun2">Arraste</span> ou clique aqui para adicionar uma imagem
              </p>
            )}
          </>
        )}
      </label>
      {error && <p className='text-vermelho-300 text-ct2'>{error}</p>}
    </div>
  );
}

export function RenderImage({ file, onRemove }) {
  const [imageLink, setImageLink] = React.useState();

  React.useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageLink(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  return (
    <div>
      <RemoveItems onRemove={onRemove} />
      {imageLink && <img className="max-w-full object-cover" src={imageLink} alt="Uploaded preview" />}
    </div>
  );
}
