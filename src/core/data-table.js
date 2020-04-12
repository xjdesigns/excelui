import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { TABLE_COLUMN, TABLE_DATA } from '../data/table-data'

function DataTable() {
  const finalCol = TABLE_COLUMN.map(col => {
    return {
      ...col,
      width: 80,
      editable: true,
      sortable: true,
      filter: true
    }
  })

  return (
    <AgGridReact
      columnDefs={finalCol}
      rowData={TABLE_DATA}>
    </AgGridReact>
  );
}

export default DataTable;
