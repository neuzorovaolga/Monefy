import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CostItem } from "./CostItem";
import styles from "./Costs.module.css";
import { CostsFilter } from "./CostsFilter";
import { firebaseOnSnapshotCosts } from "../../../../firebase/costs";
import { getUserId } from "../../../../redux/user/selectors";
import { setExpensesAction } from "../../../../redux/costs/actions";
import { getSelectedDay } from "../../../../redux/costs/selectors";

export const Costs = () => {
  const dispatch = useDispatch();
  const [costs, setCosts] = useState([]);
  const selectedDay = useSelector(getSelectedDay);
  const userId = useSelector(getUserId);

  useEffect(() => {
    const unsubscribe = firebaseOnSnapshotCosts(userId, setCosts, selectedDay);
    return () => {
      unsubscribe();
    };
  }, [selectedDay]);

  useEffect(() => {
    dispatch(
      setExpensesAction(costs.reduce((acc, item) => +acc + +item.sum, 0))
    );
  }, [costs]);

  return (
    <div>
      <div className={styles.costs}>
        <CostsFilter />

        <div className={styles.scroll}>
          {costs.length === 0 ? (
            <h3>Нет расходов</h3>
          ) : (
            costs?.map((cost) => {
              return <CostItem key={cost.id} cost={cost} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};
