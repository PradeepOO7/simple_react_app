import React from "react";
import "./App.css";
import {data} from "./data";  

export const Department = () => {
    let sum=0;
    let add=0;
    {data.map((data, key) => {
        sum+=data.Sales;
        add+=parseFloat(data.Percentage.replace(/\D/g,''));
        console.log(add);
})};

  return (
    <>
      <HomePageHeader />
      <div className="sales-container">
      <table>
              <Theader />
        {data.map((data, key) => {
          return (
                  <tbody>
                    <tr>
                      <td>
                        <h4>{data.DepartmentName}</h4>
                      </td>
                      <td>
                        <h4>{data.Sales}</h4>
                      </td>
                      <td>
                        <h4>{data.Percentage}</h4>
                      </td>
                    </tr>
                  </tbody>
            
          );
        })}
        <tfoot>
                <tr>
                  <td>
                    <b>Total</b>
                  </td>
                  <td>
                    <b>{sum}</b>
                  </td>
                    <td>
                    <b>{add}%</b>
                  </td>
                  </tr>
                </tfoot>
              </table>
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Tab1</h2>
    </header>
  );
};

const Theader= () => { 
  return(
    <thead>
       <tr>
          <th>Department Name</th>
          <th>Sales</th>
          <th>Percentage</th>
        </tr>
   </thead>
    );
};