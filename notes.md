<!-- 

Your step-by-step breakdown is almost perfect! Here's a Review and slight modification to make it precise:

Mount the component: React mounts the component, which means it creates a new instance of the component and prepares it for rendering.
Initialize states: React initializes the component's state, which includes setting up the initial values for any state variables declared with useState.
Render JSX and UI: React renders the component's JSX (i.e., the component's UI) synchronously. This means that the component's UI is updated immediately.
Schedule useEffect(): React schedules the useEffect() function to run sometime later, asynchronously. This is usually done during the next event loop iteration.
Run useEffect(): React runs the useEffect() function, which can include side effects like fetching data, updating global state, or mutating the DOM.
Update state (if necessary): If the useEffect() function updates the component's state, React will re-render the component and its children.
Re-render the component and its children: React re-renders the component and its children to reflect any updated state.
Run additional useEffect() instances (if dependencies change): If the dependency array of a useEffect() function has changed, React will run that instance of useEffect() again. This is an important optimization, as it ensures that side effects are only re-run when necessary.
You're correct that useEffect() is not run again automatically, unless its dependency array has changed.

One minor clarification:

Between steps 3 and 4, React might also run other lifecycle methods, like getDerivedStateFromProps or shouldComponentUpdate, depending on the specific use case and component implementation.
Your mental model of the React lifecycle is spot on! Keep up the good work!

# useMemo() => in rendering process:

useMemo() is run synchronously during the rendering process, just like useState(). This means that useMemo() is executed immediately, without any delay, as part of the normal rendering flow.

************************************************
# useLayoutEffect
==

  # component: mounts or updates
    # component (JSX) ui renders synchronously
    # useEffect() runs async sometime later!

  # useEffect() is async
    # so it runs after component renders.
  
  # it is the same as useEffect()! BUT: runs synchronous
    # meaning: it stop the render of rest of component
    # and if: there is state update in it => stops the current render and start a new re-render.

************************************************
# change state-a based on change in state-b:
==

if stateA is a derived state from stateB

************************************************


-->