// // DataTable.jsx
// import PropTypes from 'prop-types';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import './DataTable.css'; 


// const MyDataTable = ({ data }) => {
//     return (
//         <DataTable value={data} paginator rows={10} className="p-datatable-responsive">
//             <Column field="_id" header="Roll No" sortable />
//             <Column field="scores" header="Scores" body={(rowData) => rowData.scores.join(', ')} sortable />
//             <Column field="totalScore" header="Total Score" sortable />
//         </DataTable>
//     );
// };

// MyDataTable.propTypes = {
//     data: PropTypes.arrayOf(
//         PropTypes.shape({
//             _id: PropTypes.string.isRequired,
//             scores: PropTypes.arrayOf(PropTypes.number).isRequired,
//             totalScore: PropTypes.number.isRequired,
//         })
//     ).isRequired,
// };

// export default MyDataTable;
