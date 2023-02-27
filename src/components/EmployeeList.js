import "./EmployeeList.css";
import Employee from "./Employee.js";

const EmployeeList = () => {
    const employees = [
        {
            name: "Horace",
            surname: "Slughorn",
            role: "Zbieracz winogron",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan ex sapien. Ut rutrum sed arcu sit amet pulvinar. Duis ut nibh nec felis venenatis iaculis et non ipsum. ",
            photo: "/media/horace.png",
        },
        {
            name: "Minerva",
            surname: "McGonagall",
            role: "Zaklinacz bakterii",
            desc: "Morbi egestas placerat felis. Sed eget fringilla est. Nunc non volutpat ipsum. Vestibulum eget nisl interdum, condimentum elit ut, facilisis sem.",
            photo: "/media/minerva.jpg",
        },
        {
            name: "Brian",
            surname: "Percival",
            role: "Wycinacz korków",
            desc: "Donec non nisl finibus, suscipit diam et, luctus sapien. Fusce sollicitudin dui elit, vitae ultrices sapien congue congue. Integer laoreet eros mi, ac rhoncus libero laoreet quis.",
            photo: "/media/mugwump.png",
        },
        {
            name: "Snivellus",
            surname: "",
            role: "Ważniak",
            desc: "Proin vestibulum risus risus, ultrices laoreet ante congue vitae. Sed auctor tellus ultricies nunc aliquet volutpat. Sed eget tortor non nisi ultrices tempus et vitae ante.",
            photo: "/media/snivellus.jpeg",
        },
    ];

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
                        /* linkLive={linkLive}
                        section={section} */
                        key={name + surname}
                    />
                ))}
            </div>
        </section>

        /* <div className="navbar-ribbon">
            <div className="container navbar">
                <a
                    href="../index.html"
                    alt="In Vino Veritas"
                    className="comp-name"
                >
                    In Vino Veritas
                </a>
                <section className="navigation">
                    <ul className="nav-list">
                        {links.map(({ name, linkLive, section }) => (
                            <Navlink
                                name={name}
                                linkLive={linkLive}
                                section={section}
                                key={name}
                            />
                        ))}
                    </ul>
                </section>
            </div>
        </div> */
    );
};

export default EmployeeList;
