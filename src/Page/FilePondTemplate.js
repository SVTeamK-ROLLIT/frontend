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

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function FilePondTemplate() {
  const [files, setFiles] = useState([]);

  const pond = null;

  const onSubmit = () => {
    const formData = new FormData();
    // files
    //   .map((item) => item.file)
    //   .forEach((file) => formData.append("my-file", file));
    // console.log(formData);
    console.log('pond', pond);

    if (pond) {
      pond.setOptions({
        server: {
          url: 'https://httpbin.org/post',
          timeout: 7000,
          // process: {
          //   url: "./process",
          //   method: "POST",
          //   headers: {
          //     "x-customheader": "Hello World"
          //   },
          //   withCredentials: false,
          //   onload: (response) => response.key,
          //   onerror: (response) => response.data,
          //   ondata: (formData) => {
          //     formData.append("Hello", "World");
          //     return formData;
          //   }
          // },
          // revert: "./revert",
          // restore: "./restore/",
          // load: "./load/",
          // fetch: "./fetch/"
        },
      });

      // eslint-disable-next-line no-shadow
      const files = pond.getFiles();
      // files.forEach(file => {
      //   console.log('each file', file, file.getFileEncodeBase64String());
      // });

      pond
        .processFiles(files)
        .then(res => console.log(res))
        .catch(error => console.log('err', error));
    }
  };
  return (
    <div className="App">
      <FilePond
        files={files}
        allowMultiple={false}
        onupdatefiles={setFiles}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      {console.log(files)}
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default FilePondTemplate;
