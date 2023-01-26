import imageCompression from 'browser-image-compression';

const PhotoReSizing = async function resizing(unReSizePhoto, setUnReSizePhoto) {
  const file = unReSizePhoto;

  // 이미지 resize 옵션 설정 (최대 width을 100px로 지정)
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 100,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    setUnReSizePhoto(compressedFile);
    console.log('PhotoResizing Success');

    // resize된 이미지의 url을 받아 fileUrl에 저장
    // const promise = imageCompression.getDataUrlFromFile(compressedFile);
    // promise.then(result => {
    //   setFileUrl(result);
    // });
  } catch (error) {
    console.log(error);
  }
};

export default PhotoReSizing;
