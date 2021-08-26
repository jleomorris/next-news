import React from "react";
import Image from "next/image";
import eomStyles from "../styles/EOM.module.css";

const eom = ({ employeeDetails }) => {
  const employee = employeeDetails.results[0];
  console.log("eom.employeeDetails", employeeDetails);
  console.log("eom.employee", employee);

  return (
    <div className="page-container">
      <div className={eomStyles.main}>
        <h1>Employee Of The Month</h1>

        <div className={eomStyles.employeeOfTheMonth}>
          <h3>{`${employee.name.title} ${employee.name.first} ${employee.name.last}`}</h3>
          <h3>{employee.email}</h3>
          <Image
            src={employee.picture.large}
            alt="employee"
            height="200"
            width="200"
          />
          <p>{`${employee.location.city} branch`}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse2 = await fetch("https://randomuser.me/api/");

  const employeeDetails = await apiResponse2.json();

  return {
    props: {
      employeeDetails,
    },
  };
};

export default eom;
