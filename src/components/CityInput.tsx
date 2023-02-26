import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setLocation } from "../store/weatherSlice";

const CityInput = () => {
  const { location } = useSelector((state: RootState) => state.weather);
  const [userInput, setUserInput] = React.useState<string>("");
  const dispatch = useDispatch();
  const updateCity = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLocation(userInput));
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  return (
    <div>
      <form onSubmit={updateCity}>
        <input value={userInput} onChange={onChangeHandler} type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CityInput;
