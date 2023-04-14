import { useEffect, useState } from 'react';
import { api } from './api';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [uniqFiles, setUniqFiles] = useState([]);

  const getData = (file) => {
    setLoading(true);
    const params = file ? { params: { file } } : {};
    api.get('/files/data', params)
      .then(r => {
        const lines = r.data;
        setData(lines);
      })
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    setLoading(true);
    api.get('/files/data')
      .then(r => {
        const lines = r.data;
        setData(lines);
        const files = [];
        for (const line of lines) {
          if (files.indexOf(line.file) === -1) {
            files.push({
              file: line.file,
              validLines: line.lines.length
            });
          }
        }
        setUniqFiles(files);
      })
    .finally(() => setLoading(false));
  }, []);

  return (
    <div className="app container">
      <div className='header '>
        <span>React Test App</span>
      </div>
      <div className='mt-1 ms-3 me-3'>
        Filtrar por archivo: <select className="form-select mb-3 mt-2" onChange={(e) => getData(e.target.value)}>
          {
            uniqFiles.map(f => {
              return <option value={f.file}>{f.file} ({uniqFiles.find(d => d.file === f.file).validLines} líneas validas)</option>
            })
          }
        </select>
        {
          loading ? 'Cargando...' : <table className='table table-striped'>
            <thead>
              <tr>
                <th>Filename</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>

            <tbody>
              {
                data.map(d => {
                  return d.lines.map(line => {
                    return <tr>
                      <td>{d.file}</td>
                      <td>{line.text}</td>
                      <td>{line.number}</td>
                      <td>{line.hexa}</td>
                    </tr>;
                  })
                })
              }
            </tbody>
          </table>
        }
      </div>
    </div>
  );
}

export default App;
