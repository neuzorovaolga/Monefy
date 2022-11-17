import { firebaseGetCostsYear } from "../../firebase/costs";
import { costsDataAction, diagramsAction } from "./actions";

export const getCostsYearThunk = () => {
  return (dispatch, getState) => {
    const { userReducer, costsReducer } = getState();
    const userId = userReducer.userData.uid;
    const year = costsReducer.selectedYear;

    firebaseGetCostsYear(userId, year).then((data) => {
      dispatch(costsDataAction(data));

      const diagramData = data.reduce(
        (acc, item) => {
          const costMonth = item.date.getMonth();
          acc[costMonth].value =
            Number(acc[costMonth].value) + Number(item.sum);
          acc[costMonth].costs = [...acc[costMonth].costs, item];
          return acc;
        },
        [
          { id: "Jan", label: "January", value: 0, costs: [] },
          { id: "Feb", label: "February", value: 0, costs: [] },
          { id: "Mar", label: "March", value: 0, costs: [] },
          { id: "Apr", label: "April", value: 0, costs: [] },
          { id: "May", label: "May", value: 0, costs: [] },
          { id: "Jun", label: "Juny", value: 0, costs: [] },
          { id: "Jul", label: "July", value: 0, costs: [] },
          { id: "Aug", label: "August", value: 0, costs: [] },
          { id: "Sep", label: "September", value: 0, costs: [] },
          { id: "Oct", label: "October", value: 0, costs: [] },
          { id: "Nov", label: "November", value: 0, costs: [] },
          { id: "Dec", label: "December", value: 0, costs: [] },
        ]
      );

      dispatch(diagramsAction(diagramData));
    });
  };
};
