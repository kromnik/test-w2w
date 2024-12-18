import React, { useCallback, useState, useEffect } from "react";
import { Doctor } from "../assets/types";
import initialDate from "../data/db.json";
import DoctorsTable from "../components/DoctorsTable";
import AddDoctorPopup from "../components/AddDoctorPopup";

const DoctorsPage: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const doctorsLocalStorage = localStorage.getItem("doctors");
    if (doctorsLocalStorage) {
      setDoctors(JSON.parse(doctorsLocalStorage));
    } else {
      localStorage.setItem("doctors", JSON.stringify(initialDate.doctors));
      setDoctors(initialDate.doctors as Doctor[]);
    }
  }, [setDoctors]);

  const addDoctor = useCallback(
    (doctor: Doctor) => {
      localStorage.setItem("doctors", JSON.stringify([...doctors, doctor]));
      setDoctors([...doctors, doctor]);
    },
    [doctors]
  );

  const deleteDoctor = useCallback(
    (id: number) => {
      localStorage.setItem(
        "doctors",
        JSON.stringify(doctors.filter((doctor) => doctor.id !== id))
      );
      setDoctors(doctors.filter((doctor) => doctor.id !== id));
    },
    [doctors]
  );

  const editDoctor = useCallback(
    (updatedDoctor: Doctor) => {
      localStorage.setItem(
        "doctors",
        JSON.stringify(
          doctors.map((doctor) =>
            doctor.id === updatedDoctor.id ? updatedDoctor : doctor
          )
        )
      );
      setDoctors(
        doctors.map((doctor) =>
          doctor.id === updatedDoctor.id ? updatedDoctor : doctor
        )
      );
    },
    [doctors]
  );

  return (
    <div className="container">
      <h1>Врачи</h1>
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-primary"
      >
        Добавить сотрудника
      </button>
      <AddDoctorPopup
        addDoctor={addDoctor}
        showModal={showModal}
        handleClose={() => setShowModal(false)} 
      />
      <DoctorsTable
        doctors={doctors}
        deleteEmployee={deleteDoctor}
        editDoctor={editDoctor}
      />
    </div>
  );
};

export default DoctorsPage;
