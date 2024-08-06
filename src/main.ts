import init from "./complex/init.js";
import { store } from "./store.js";

//store.subscribe(() => console.log(JSON.stringify(store.getState())))

// this is like a fake flow
// normally this would happen after two connections made

init.perform(store);
