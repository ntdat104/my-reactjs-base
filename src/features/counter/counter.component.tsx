import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  incrementSagaAsync,
  selectCount,
} from "./counter-slice";
import "./counter.component.scss";

export const Counter: React.FC = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className="row">
        <button className="btn" onClick={() => dispatch(decrement())}>
          -
        </button>
        <span>{count}</span>
        <button className="btn" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className="row">
        <input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <button className="btn" onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button className="btn btn_async" onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
        <button className="btn btn_async" onClick={() => dispatch(incrementSagaAsync(incrementValue))}>
          Add Async Saga
        </button>
        <button className="btn" onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
      </div>
    </div>
  );
};
