import React from "react";
import Image from "next/image";
import eomStyles from "../styles/EOM.module.css";

const eom = ({ employee }) => {
  console.log(employee);

  return (
    <div className="page-container">
      <div className={eomStyles.main}>
        <h1>Employee Of The Month</h1>

        <div className={eomStyles.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          <Image src={employee.image} alt="employee" height="200" width="200" />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );

  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default eom;
