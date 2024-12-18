import React, { useState } from 'react';
import { Doctor } from '../assets/types';
import { EditDoctorPopup } from './EditDoctorPopup';
import { DeleteEmployeePopup } from './DeleteEmployeePopup';

interface DoctorTableProps {
  doctors: Doctor[];
  deleteEmployee: (id: number) => void;
  editDoctor: (doctor: Doctor) => void;
}

const DoctorTable: React.FC<DoctorTableProps> = ({ doctors, deleteEmployee, editDoctor }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState({} as Doctor);
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ФИО</th>
          <th scope="col">Отделение</th>
          <th scope="col">Заведующий</th>
          <th scope="col">Изменить</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor) => (
          <tr key={doctor.id}>
            <td>{doctor.fullname}</td>
            <td>{doctor.department}</td>
            <td>{doctor.isHead ? 'Да' : 'Нет'}</td>
            <td>
                <button 
                  onClick={() => { setShowDeleteModal(true); setCurrentDoctor(doctor)}} 
                  className="btn btn-danger" 
                  style={{marginRight: 10}}
                >
                  Удалить
                </button>
                <DeleteEmployeePopup
                  showModal={showDeleteModal}
                  deleteEmployee={deleteEmployee}
                  employee={currentDoctor}
                  handleClose={() => setShowDeleteModal(false)}
                />
                <button
                  onClick={() => { setShowEditModal(true); setCurrentDoctor(doctor)}} 
                  className="btn btn-warning"
                >
                  Редактировать
                </button>
                <EditDoctorPopup
                  showModal={showEditModal}
                  editDoctor={editDoctor}
                  doctor={currentDoctor}
                  handleClose={() => setShowEditModal(false)}
                />
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DoctorTable;
