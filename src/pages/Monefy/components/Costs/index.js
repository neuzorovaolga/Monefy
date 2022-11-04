import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CostItem } from "./CostItem";
import styles from "./Costs.module.css";
import { Card } from "../../../../components/Card";
import { CostsFilter } from "./CostsFilter";
import { firebaseOnSnapshotCosts } from "../../../../firebase/costs";
import { getUserId } from "../../../../redux/user/selectors";
import { setExpensesAction } from "../../../../redux/costs/actions";

export const Costs = () => {
  const dispatch = useDispatch();
  const [costs, setCosts] = useState([]);
  const [filteredDate, setFilteredDate] = useState(new Date());
  const userId = useSelector(getUserId);

  useEffect(() => {
    const unsubscribe = firebaseOnSnapshotCosts(userId, setCosts, filteredDate);
    return () => {
      unsubscribe();
    };
  }, [filteredDate]);

  useEffect(() => {
    dispatch(
      setExpensesAction(costs.reduce((acc, item) => +acc + +item.sum, 0))
    );
  }, [costs]);

  return (
    <div>
      <Card className={styles.costs}>
        <CostsFilter date={filteredDate} setDate={setFilteredDate} />

        <div className={styles.scroll}>
          {costs.length === 0 ? (
            <h3>Нет расходов</h3>
          ) : (
            costs?.map((cost) => {
              return <CostItem key={cost.id} cost={cost} />;
            })
          )}
        </div>
      </Card>
    </div>
  );
};
