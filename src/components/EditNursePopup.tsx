import React, { useEffect, useState } from "react";
import { Nurse, Department } from "../assets/types";

interface EditNurseFormProps {
  editNurse: (Nurse: Nurse) => void;
  nurse: Nurse;
  showModal: boolean;
  handleClose: () => void;
}

export const EditNursePopup: React.FC<EditNurseFormProps> = ({
  editNurse,
  nurse,
  showModal,
  handleClose,
}) => {
  const [fullname, setFullname] = useState("");
  const [department, setDepartment] = useState<Department>(
    Department.Cardiology
  );

  useEffect(() => {
    setFullname(nurse.fullname);
    setDepartment(nurse.department);
  }, [nurse]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updateNurse: Nurse = {
      id: nurse.id,
      fullname,
      department,
    };
    editNurse(updateNurse);
    setFullname("");
    setDepartment(Department.Cardiology);
    handleClose();
  };

  return (
    <div className={`modal ${showModal ? "d-block" : "d-none"}`} tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Редактировать данные</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="dataInput">ФИО</label>
                <input
                  type="text"
                  className="form-control"
                  id="dataInput"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dataInput">Отделение</label>
                <select
                  className="form-select"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value as Department)}
                  required
                >
                  <option value={Department.Cardiology}>
                    {Department.Cardiology}
                  </option>
                  <option value={Department.Surgery}>
                    {Department.Surgery}
                  </option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Отмена
              </button>
              <button type="submit" className="btn btn-primary">
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
