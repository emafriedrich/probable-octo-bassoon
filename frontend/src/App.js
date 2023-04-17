import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FileList from './fileList';
import { fetchFiles } from './fileList/state/actions';

function App() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchFiles()));

  return <FileList />;
}

export default App;
