import React, { useEffect } from "react";
import { getPatients } from "./apiPatients";

function Patients() {
  useEffect(() => {
    // 调用 getPatients 函数
    getPatients().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h2>Patients List</h2>
      {/* 其他代码 */}
    </div>
  );
}

export default Patients;
