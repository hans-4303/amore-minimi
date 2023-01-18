import React from "react";
import { Link } from "react-router-dom";
import Benefits from "../Benefits";
import BenefitTabs from "../BenefitTabs";

const BenefitSection = () => {
  return (
    <section>
      <div>
        <div>
          <h3>
            <Link to={"/sales"}>세일 섹션</Link>
          </h3>
        </div>
        <div>
          <BenefitTabs></BenefitTabs>
          <BenefitTabs></BenefitTabs>
          <BenefitTabs></BenefitTabs>
          <BenefitTabs></BenefitTabs>
          <BenefitTabs></BenefitTabs>
        </div>
        <Benefits></Benefits>
        <Benefits></Benefits>
        <Benefits></Benefits>
        <button>이전</button>
        <button>다음</button>
        <Link to={"/sales"}>
          세일 종류,<em>개수, 단위</em>
        </Link>
      </div>
    </section>
  );
};

export default BenefitSection;
