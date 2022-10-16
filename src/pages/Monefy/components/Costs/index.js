import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CostItem } from "./CostItem";
import styles from "./Costs.module.css";
import { Card } from "../../../../components/Card";
import { CostsFilter } from "./CostsFilter";
import {
  firebaseGetDataCostDoc,
  firebaseOnSnapshotCosts,
} from "../../../../firebase/costs";
import { getUserId } from "../../../../redux/user/selectors";

export const Costs = () => {
  const [costs, setCosts] = useState([]);
  const [filteredDate, setFilteredDate] = useState(new Date());
  const userId = useSelector(getUserId);

  useEffect(() => {
    const unsubscribe = firebaseOnSnapshotCosts(userId, setCosts, filteredDate);
    return () => {
      unsubscribe();
    };
  }, [filteredDate]);
  console.log("costs", costs);

  const onDelete = (id) => {
    // props.setCosts(costs.filter((costs) => costs.id !== id));
  };

  return (
    <div>
      <Card className={styles.costs}>
        {/* <CostsFilter year={year} onChangeYear={yearChangeHandler} /> */}
        <CostsFilter date={filteredDate} setDate={setFilteredDate} />
        <div className={styles.scroll}>
          {costs.length === 0 ? (
            <p>В этом году расходов нет</p>
          ) : (
            costs?.map((cost) => {
              return <CostItem cost={cost} onDelete={onDelete} />;
            })
          )}
        </div>
      </Card>
    </div>
  );
};
