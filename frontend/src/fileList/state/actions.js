import { filesLoaded, loadFiles, showFile, showFileFinished } from ".";
import { api } from "../../api";

const showError = () => alert('Errors downloading file/s');

export const fetchFiles = (file) => {
  return (dispatch) => {
    if (file) {
      dispatch(showFile(file));
      api.get('/files/data', { params: { file } })
        .then(r => {
          dispatch(showFileFinished(r.data));
        })
        .catch(() => {
          showError();
          dispatch(showFileFinished([]));
        })
    } else {
      dispatch(loadFiles());
      api.get('/files/data')
        .then(r => {
          dispatch(filesLoaded(r.data));
        })
        .catch(() => {
          showError();
          dispatch(filesLoaded([]));
        })
    }
  }
}