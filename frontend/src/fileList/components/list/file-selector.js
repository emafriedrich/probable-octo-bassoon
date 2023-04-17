import { useDispatch, useSelector } from 'react-redux';
import { fetchFiles } from '../../state/actions';

const FileSelector = () => {
  const { uniqFiles, selectedFile } = useSelector(state => state.files)

  const dispatch = useDispatch();

  return <>
    Filtrar por archivo: <select className="form-select mb-3 mt-2" placeholder="Seleccionar" onChange={(e) => {
      if (e.target.value === 'Mostrar todos') {
        dispatch(fetchFiles());
      } else {
        dispatch(fetchFiles(e.target.value));
      }
    }}>
      {
        [null, ...uniqFiles].map(f => {
          if (!f) {
            return <option selected={selectedFile === null} key="0" value={null}>Mostrar todos</option>
          }
          return <option selected={selectedFile === f.file} key={f.file} value={f.file}>{f.file} ({f.validLines} líneas validas)</option>
        })
      }
    </select>
  </>;
};

export default FileSelector;