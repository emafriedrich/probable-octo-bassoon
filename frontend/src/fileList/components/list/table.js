import { useSelector } from 'react-redux'

const Table = () => {
  const { files } = useSelector(state => state.files)

  return (
    <table className='table table-striped'>
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
            files.map(file => {
              return file.lines.map((line, index) => {
                return <tr key={index}>
                  <td>{file.file}</td>
                  <td>{line.text}</td>
                  <td>{line.number}</td>
                  <td>{line.hexa}</td>
                </tr>;
              })
            })
          }
        </tbody>
      </table>
  );
};

export default Table;