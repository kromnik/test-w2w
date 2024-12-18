import React, { useState } from "react";
import { Nurse } from "../assets/types";
import { EditNursePopup } from "./EditNursePopup";
import { DeleteEmployeePopup } from "./DeleteEmployeePopup";

interface NurseTableProps {
  nurses: Nurse[];
  deleteEmployee: (id: number) => void;
  editNurse: (Nurse: Nurse) => void;
}

const NurseTable: React.FC<NurseTableProps> = ({
  nurses,
  deleteEmployee,
  editNurse,
}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentNurse, setCurrentNurse] = useState({} as Nurse);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ФИО</th>
          <th scope="col">Отделение</th>
          <th scope="col">Изменить</th>
        </tr>
      </thead>
      <tbody>
        {nurses.map((nurse) => (
          <tr key={nurse.id}>
            <td>{nurse.fullname}</td>
            <td>{nurse.department}</td>
            <td>
              <button
                onClick={() => {
                  setShowDeleteModal(true);
                  setCurrentNurse(nurse);
                }}
                className="btn btn-danger"
                style={{ marginRight: 10 }}
              >
                Удалить
              </button>
              <DeleteEmployeePopup
                showModal={showDeleteModal}
                deleteEmployee={deleteEmployee}
                employee={currentNurse}
                handleClose={() => setShowDeleteModal(false)}
              />
              <button
                onClick={() => {
                  setShowEditModal(true);
                  setCurrentNurse(nurse);
                }}
                className="btn btn-warning"
              >
                Редактировать
              </button>
              <EditNursePopup
                showModal={showEditModal}
                editNurse={editNurse}
                nurse={currentNurse}
                handleClose={() => setShowEditModal(false)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NurseTable;
