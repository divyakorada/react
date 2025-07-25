import { FixedSizeList as List } from "react-window";
import { useParams, useNavigate } from 'react-router-dom';

const LargeDataSet = () => {
    const { id } = useParams();
  const navigate = useNavigate();

  // Show Detail View
  if (id !== undefined) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>🔍 Item Detail</h2>
        <p>You clicked on <strong>Item #{id}</strong>.</p>
        <button onClick={() => navigate('/interview/large-dataset/')}>🔙 Back to List</button>
      </div>
    );
  }
  // Show Virtualized List View
  const Row = ({ index, style }) => (
    <div
      style={{
        ...style,
        padding: '10px',
        borderBottom: '1px solid #ccc',
        cursor: 'pointer',
        background: index % 2 === 0 ? '#f9f9f9' : '#fff',
      }}
      onClick={() => navigate(`/interview/large-dataset/${index}`)}
    >
      🔹 Item #{index}
    </div>
  );
  return (
    <div style={{ width: '80%', height: '500px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Virtualized List</h2>
      <List
        height={300}
        itemCount={100}
        itemSize={50}
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
};

export default LargeDataSet;
