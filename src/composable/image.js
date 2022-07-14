import axios from "axios";
export async function _ImageSetter(fileObj, callBack, number = null) {
  await axios
    .post("image", fileObj)
    .then((response) => {
      console.log(response.data.result);
      if (number != null) {
        callBack(response.data.result, number); // id
      } else {
        callBack(response.data.result); // id
      }
    })
    .catch((e) => {
      console.error(e);
    });
}
export async function _ImageEdit(fileObj, id) {
  await axios
    .put("image" + id, fileObj)
    .then((response) => {
      return response;
    })
    .catch((e) => {
      console.error(e);
    });
}
