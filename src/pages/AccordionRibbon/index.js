import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SelectedYearFilter } from "../../components/SelectedYearFilter";
import { useDispatch, useSelector } from "react-redux";
import { getDiagramData, getSelectedYear } from "../../redux/costs/selectors";
import { getCostsYearThunk } from "../../redux/costs/thunks";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import styles from "./AccordionRibbon.module.css";

export const AccordionRibbon = () => {
  const selectedYear = useSelector(getSelectedYear);
  const dispatch = useDispatch();
  const diagramData = useSelector(getDiagramData);
  useEffect(() => {
    dispatch(getCostsYearThunk());
  }, [selectedYear]);

  return (
    <div className={styles.wrapper}>
      <SelectedYearFilter />
      <div className={styles.accordion}>
        {diagramData.map((data, index) => {
          return (
            <Accordion key={index} sx={{ backgroundColor: "aliceblue" }}>
              <AccordionSummary
                sx={{
                  backgroundColor: " #b4d0cd;",
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div style={{ color: "rgb(0 105 95)", fontWeight: "bold" }}>
                    {data.label} ( {data.value} $ )
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {data.value === 0 ? (
                    <div style={{ color: "rgba(19, 93, 59, 0.787" }}>
                      Нет расходов
                    </div>
                  ) : (
                    <>
                      {data.costs.map((cost) => {
                        return (
                          <div className={styles.wrapperCost} key={cost.id}>
                            <div
                              className={styles.date}
                            >{`${cost.date.toLocaleDateString("en-EN", {
                              weekday: "long",
                              day: "numeric",
                            })}`}</div>
                            <div className={styles.costName}>{cost.name}</div>
                            <div style={{ color: "rgb(233, 30, 99)" }}>
                              {cost.sum} $
                            </div>
                          </div>
                        );
                      })}
                    </>
                  )}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};
