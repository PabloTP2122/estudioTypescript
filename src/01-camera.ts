import { Camera, CameraDirection, CameraResultType, ImageOptions } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
    correctOrientation: true,
    direction: CameraDirection.Front
  });
};
