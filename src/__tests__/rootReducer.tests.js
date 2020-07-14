import rootReducer from "../rootReducer";
import * as t from "../actionTypes";

// test if the rootReduce is a pure function as well 

it("should return correctly modified state with ADD_TO_CART", () => {
  let INITIAL_STATE = { inventory: [], cart: [] };
  let INITIAL_STATE_COPY = { ...INITIAL_STATE };

  expect(rootReducer(INITIAL_STATE, { type: t.ADD_TO_CART, payload: "someId" })).toEqual({ inventory: [], cart: ["someId"] });
  expect(INITIAL_STATE).toEqual(INITIAL_STATE_COPY);
});

it("should return correctly modified state with REMOVE_FROM_CART", () => {
  let INITIAL_STATE = { inventory: [], cart: [] };
  let INITIAL_STATE_COPY = { ...INITIAL_STATE };

  expect(rootReducer({ inventory: [], cart: ["someId"] }, { type: t.REMOVE_FROM_CART, payload: "someId" }))
    .toEqual({ inventory: [], cart: [] });
  expect(INITIAL_STATE).toEqual(INITIAL_STATE_COPY);
});