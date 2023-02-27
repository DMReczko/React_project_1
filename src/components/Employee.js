/* import "./Footer.css"; */
/* import Name from 
import Dpt from 


function Employee() {
    const { name, surname, role, desc, img } = props;

    return (

        <article className="employee">
         <div class="employee-pic em-pic-2"></div>
<div class="employee-bio">
    <p class="bio-name">Imię Nazwisko [ dział ]</p>
    <p class="bio-desc">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
    </p>
</div> 
</article>

    );
}
 */

import "./EmployeeList.css";

const Employee = ({ name, surname, role, desc, photo }) => {
    return (
        <article className="employee">
            <div
                className="employee-pic"
                style={{
                    backgroundImage: `url(${photo})`,
                    /* "url(" +
                        "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                        ")", */
                }}
            >
                {/* <img src={photo} alt={name + " " + surname} /> */}
            </div>
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
