import React, { useEffect, useState } from "react";
import { CostItem } from "./CostItem";
import "./Costs.module.css";
import { Card } from "../../../../components/Card";
import { CostsFilter } from "./CostsFilter";

export const Costs = (props) => {
  const [year, setYear] = useState("2021");
  const [isLook, setLook] = useState(false);
  const yearChangeHandler = (year) => {
    setYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === year;
  });

  const onDelete = (id) => {
    props.setCosts(props.costs.filter((costs) => costs.id !== id));
  };

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={year} onChangeYear={yearChangeHandler} />
        {/* <Diagram costs={filteredCosts} /> */}
        <div>
          {filteredCosts.length === 0 ? (
            <p>В этом году расходов нет</p>
          ) : (
            filteredCosts.map((cost) => {
              return (
                <CostItem
                  key={cost.id}
                  dannie={cost}
                  allDataCost={props.costs}
                  sostoznie={isLook}
                  onDelete={onDelete}
                />
              );
            })
          )}
        </div>
      </Card>
    </div>
  );
};
