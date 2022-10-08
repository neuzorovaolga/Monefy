import React from "react";
import { CostsFilter } from "../Monefy/components/Costs/CostsFilter";
import styles from "./Diagram.module.css";
import { DiagramBar } from "./DiagramBar";

export const Diagram = (props) => {
  const diagramDataSets = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  props.costs.forEach((cost) => {
    const costMonth = cost.date.getMonth();
    diagramDataSets[costMonth].value =
      Number(diagramDataSets[costMonth].value) + Number(cost.sum);
  });

  //   return <Diagram dataSets={diagramDataSets} />;
  const dataSetsValues = diagramDataSets.map((dataSet) => dataSet.value);
  const maxMonthCosts = Math.max(...dataSetsValues);

  return (
    <>
      <div className={styles.wrapper}>
        <CostsFilter />
        <div className={styles.diagram}>
          {diagramDataSets.map((dataSet) => (
            <DiagramBar
              key={dataSet.label}
              value={dataSet.value}
              maxValue={maxMonthCosts}
              label={dataSet.label}
            />
          ))}
        </div>
      </div>
    </>
  );
};
