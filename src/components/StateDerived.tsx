import { useMemo, useState } from 'react'

export const StateDerived = () => {
  const [stateA, setStateA] = useState(0);

  const stateB = useMemo(() => {
    if (!stateA) return null;

    // stateB is always derived on the value of stateA
    return 2 * stateA;
  }, [stateA]);

  const handStateAChange = () => {
    setStateA((s:number) => s + 1);
  }

  // another method of change stateC base on change in stateD
  const [states, setStates] = useState({
    stateC: 0,
    stateD: 0,
  });

  const handStateCChange = () => {
    // change the new value for stateC 
    const inc = states.stateC + 1;
    
    setStates({
      stateC: inc,
      stateD: 2 * inc,
    })
  }

  return (
    <div>
      StateDerived

      <div>
        <button
        onClick={handStateAChange}
        >
          Increment A
        </button>
        <br/>
        state A: {stateA}
        <br/>
        state B: {stateB}
      </div>

      {/* second method */}
      <div>
        <button
        onClick={handStateCChange}
        >
          Increment C
        </button>
        <br/>
        state C: {states.stateC}
        <br/>
        state D: {states.stateD}
      </div>
    </div>
  )
}
