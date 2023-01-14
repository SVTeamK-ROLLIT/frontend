/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import axios from 'axios';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function FilePondTemplate() {
  const [files, setFiles] = useState([]);
  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', files[0].file);
    formData.append('password', '1234');
    formData.append('xcoor', '12');
    formData.append('ycoor', '12');
    formData.append('rotate', '20');
    axios
      .post('http://127.0.0.1:8080/api/v1/papers/1/photos', formData)
      .then(res => {
        console.log(formData);
        console.log(res);
      })
      .catch(err => {
        console.log('fail');
      });
  };
  return (
    <div className="App">
      <FilePond
        files={files}
        allowMultiple={false}
        onupdatefiles={setFiles} // 파일을 업로드하면 files에 저장해줌
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />

      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default FilePondTemplate;
