import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

export default function Uploud(props) {
  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef(null);

  const onTemplateSelect = (e) => {
    let _totalSize = e.files[0].size || 0;
    setTotalSize(_totalSize);
  };


  const onTemplateRemove = (file, callback) => {
    setTotalSize(0);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };


  const itemTemplate = (file, props) => {
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: '40%' }}>
          <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => onTemplateRemove(file, props.onRemove)}
        />
      </div>
    );
  };


  let  base64data="";
  const customBase64Uploader = async (event) => {
        
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob()); 

    reader.readAsDataURL(blob);

    reader.onloadend = function () {
        base64data = reader.result;
       console.log(props.customBase64Upload);
       props.customBase64Upload(base64data);
        
    }};


    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

    return (

        <div>
        <Toast ref={toast}></Toast>

        <FileUpload ref={fileUploadRef} name="demo[]" url="/api/upload" multiple accept="image/*" maxFileSize={1000000}
        customUpload uploadHandler={customBase64Uploader} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
        itemTemplate={itemTemplate} emptyTemplate={<>  <i className="pi pi-image mt-3 p-5" 
        style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
        <p className="m-0">Drag and drop files to here to upload.</p></>}
        chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions}
        />

        </div>
    )
}

