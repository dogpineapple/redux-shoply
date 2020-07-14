import { add, remove } from "../actions";

it("should return add action object", () => {
  expect(add("someId")).toEqual({ type: "ADD_TO_CART", payload: "someId"});
});

it("should return remove action object", () => {
  expect(remove("someId")).toEqual({ type: "REMOVE_FROM_CART", payload: "someId"});
});