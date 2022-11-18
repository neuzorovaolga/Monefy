import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectedYearFilter } from "../../components/SelectedYearFilter";
import {
  getDiagramData,
  getSelectedYear,
  getCostsSelectedYear,
} from "../../redux/costs/selectors";
import { getCostsYearThunk } from "../../redux/costs/thunks";

import styles from "./Diagram.module.css";

import { NinoDiagram } from "./NinoDiagram";

export const Diagram = () => {
  const selectedYear = useSelector(getSelectedYear);
  const costsSelectedYear = useSelector(getCostsSelectedYear);
  const dispatch = useDispatch();
  const diagramData = useSelector(getDiagramData);

  useEffect(() => {
    dispatch(getCostsYearThunk());
  }, [selectedYear]);

  return (
    <div className={styles.wrapper}>
      <SelectedYearFilter />
      <div className={styles.diagram}>
        {costsSelectedYear.length === 0 ? (
          <h3 style={{ color: "rgb(0 105 95)" }}>Нет расходов</h3>
        ) : (
          <>
            <NinoDiagram data={diagramData} />
            <h3>Yearly spending schedule</h3>
          </>
        )}
      </div>
    </div>
  );
};
