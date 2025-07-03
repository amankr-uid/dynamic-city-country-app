export default function DataTable({ data }) {
  if (!data || data.length === 0) return <p>No data available.</p>;

  const headers = Object.keys(data[0]);

  return (
    <table className="min-w-full border border-gray-300">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} className="border px-4 py-2">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {headers.map((header) => (
              <td key={header} className="border px-4 py-2">
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
