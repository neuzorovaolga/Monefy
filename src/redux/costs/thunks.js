import { firebaseGetCostsYear } from "../../firebase/costs";
import { setCostsDataAction, setDiagramsAction } from "./actions";

export const getCostsYearThunk = () => {
  return (dispatch, getState) => {
    const { userReducer, costsReducer } = getState();
    const userId = userReducer.userData.uid;
    const year = costsReducer.selectedYear;

    firebaseGetCostsYear(userId, year).then((data) => {
      dispatch(setCostsDataAction(data));

      const diagramData = data.reduce(
        (acc, item) => {
          const costMonth = item.date.getMonth();

          acc[costMonth].value =
            Number(acc[costMonth].value) + Number(item.sum);

          acc[costMonth].costs.push(item);
          return acc;
        },
        [
          { id: "January", label: "January", value: 0, costs: [] },
          { id: "February", label: "February", value: 0, costs: [] },
          { id: "March", label: "March", value: 0, costs: [] },
          { id: "April", label: "April", value: 0, costs: [] },
          { id: "May", label: "May", value: 0, costs: [] },
          { id: "Juny", label: "Juny", value: 0, costs: [] },
          { id: "July", label: "July", value: 0, costs: [] },
          { id: "August", label: "August", value: 0, costs: [] },
          { id: "September", label: "September", value: 0, costs: [] },
          { id: "October", label: "October", value: 0, costs: [] },
          { id: "November", label: "November", value: 0, costs: [] },
          { id: "December", label: "December", value: 0, costs: [] },
        ]
      );

      dispatch(setDiagramsAction(diagramData));
    });
  };
};
