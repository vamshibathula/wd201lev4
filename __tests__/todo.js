/* eslint-disable no-undef */
const shouldlist = require("../todo");
let justnow = new Date().toLocaleDateString("en-CA");

const { all, done, add, late, duethisday, duenext } = shouldlist();

describe("testing the todo lists", () => {
  beforeAll(() => {
    add({
      title: "In the air and taken",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("list obtaining a new todo", () => {
    // expect(all.length).toBe(0);
    let length = all.length;

    add({
      title: "unbelievable and unbreakable",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("tick the todo as completed", () => {
    expect(all[0].completed).toBe(false);
    done(0);
    expect(all[0].completed).toBe(true);
  });

  test("todo which are overdue are retrieved", () => {
    let todoslist = late();

    expect(
      todoslist.every((todo) => {
        return todo.dueDate < justnow;
      })
    ).toBe(true);
  });

  test("todos which are due for this moment are retrieved", () => {
    let todoslist = duethisday();

    expect(
      todoslist.every((todo) => {
        return todo.dueDate === justnow;
      })
    ).toBe(true);
  });

  test("todos which are due for later are retrieved", () => {
    let todoslist = duenext();

    expect(
      todoslist.every((todo) => {
        return todo.dueDate > justnow;
      })
    ).toBe(true);
  });
});
