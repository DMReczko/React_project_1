import "./EmployeeList.css";
import Employee from "./Employee.js";
import employees from "../../data/employees";

const EmployeeList = () => {
    return (
        <section id="about" className="about-content">
            <div className="container all-employees">
                <h2 className="about-header">Nasi specjaliści</h2>
                {employees.map(({ name, surname, role, desc, photo }) => (
                    <Employee
                        name={name}
                        surname={surname}
                        role={role}
                        desc={desc}
                        photo={photo}
                        key={name + surname}
                    />
                ))}
            </div>
        </section>
    );
};

export default EmployeeList;
