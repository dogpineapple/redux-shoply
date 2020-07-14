import rootReducer from "../rootReducer";
import * as t from "../actionTypes";

it("should return correctly modified state with ADD_TO_CART", () => {
  expect(rootReducer({inventory: [], cart: []}, {type: t.ADD_TO_CART, payload: "someId"}))
      .toEqual({inventory: [], cart: ["someId"]});
});

it("should return correctly modified state with REMOVE_FROM_CART", () => {
  expect(rootReducer({inventory: [], cart: ["someId"]}, {type: t.REMOVE_FROM_CART, payload: "someId"}))
      .toEqual({inventory: [], cart: []});
});