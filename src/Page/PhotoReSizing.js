import imageCompression from 'browser-image-compression';

// eslint-disable-next-line consistent-return
const PhotoReSizing = async function resizing(unReSizePhoto) {
  const file = unReSizePhoto;

  // 이미지 resize 옵션 설정 (최대 width을 100px로 지정)
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 500,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    const resultFile = new File([compressedFile], compressedFile.name, {
      type: compressedFile.type,
    });

    return resultFile;
    // console.log('PhotoResizing Success');

    // resize된 이미지의 url을 받아 fileUrl에 저장
    // const promise = imageCompression.getDataUrlFromFile(compressedFile);
    // promise.then(result => {
    //   setFileUrl(result);
    // });
  } catch (error) {
    // console.log(error);
  }
};

export default PhotoReSizing;
