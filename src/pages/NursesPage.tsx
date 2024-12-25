import React, { useCallback, useState, useEffect } from "react";
import { Nurse } from "../assets/types";
import initialDate from "../data/db.json";
import NursesTable from "../components/NursesTable";
import AddNursePopup from "../components/AddNursePopup";

const NursesPage: React.FC = () => {
  const [nurses, setNurses] = useState<Nurse[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const nursesLocalStorage = localStorage.getItem("nurses");
    if (nursesLocalStorage) {
      setNurses(JSON.parse(nursesLocalStorage));
    } else {
      localStorage.setItem("nurses", JSON.stringify(initialDate.nurses));
      setNurses(initialDate.nurses as Nurse[]);
    }
  }, []);

  const addNurse = useCallback(
    (nurse: Nurse) => {
      localStorage.setItem("nurses", JSON.stringify([...nurses, nurse]));
      setNurses([...nurses, nurse]);
    },
    [nurses]
  );

  const deleteNurse = useCallback(
    (id: number) => {
      localStorage.setItem(
        "nurses",
        JSON.stringify(nurses.filter((nurse) => nurse.id !== id))
      );
      setNurses(nurses.filter((nurse) => nurse.id !== id));
    },
    [nurses]
  );

  const editNurse = useCallback(
    (updatedNurse: Nurse) => {
      localStorage.setItem(
        "nurses",
        JSON.stringify(
          nurses.map((nurse) =>
            nurse.id === updatedNurse.id ? updatedNurse : nurse
          )
        )
      );
      setNurses(
        nurses.map((nurse) =>
          nurse.id === updatedNurse.id ? updatedNurse : nurse
        )
      );
    },
    [nurses]
  );

  return (
    <div className="container">
      <h1>Медсестры</h1>
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-primary"
      >
        Добавить сотрудника
      </button>
      <AddNursePopup
        addNurse={addNurse}
        showModal={showModal}
        handleClose={() => setShowModal(false)} 
      />
      <NursesTable
        nurses={nurses}
        deleteEmployee={deleteNurse}
        editNurse={editNurse}
      />
    </div>
  );
};

export default NursesPage;
