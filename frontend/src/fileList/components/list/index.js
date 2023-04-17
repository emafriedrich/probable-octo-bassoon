import { useSelector } from 'react-redux'

import FileSelector from "./file-selector";
import Table from "./table";

const List = () => {
  const { loading } = useSelector(state => state.files)

  return <div className='mt-1 ms-3 me-3'>
    <FileSelector />
    {
      loading ? 'Cargando...' : <Table />
    }
  </div>
};

export default List;