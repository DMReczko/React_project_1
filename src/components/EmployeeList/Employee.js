import "./EmployeeList.css";

const Employee = ({ name, surname, role, desc, photo }) => {
    return (
        <article className="employee">
            <div
                className="employee-pic"
                style={{
                    backgroundImage: `url(${photo})`,
                }}
            ></div>
            <div className="employee-bio">
                <p className="bio-name">
                    {name} {surname} - {role}
                </p>
                <p className="bio-desc">{desc}</p>
            </div>
        </article>
    );
};

export default Employee;
