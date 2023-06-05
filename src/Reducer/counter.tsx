export interface CounterI {
  count: number;
}

export const counterState: CounterI = {
  count: 0,
};

export type CounterActions = { type: "ADD" } | { type: "SUB" };

export const counterReducer = (
  state: CounterI,
  actions: CounterActions
): CounterI => {
  switch (actions.type) {
    case "ADD":
      return { count: state.count + 1 };
    case "SUB":
      return { count: state.count - 1 };

    default:
      throw new Error("s");
  }
};
