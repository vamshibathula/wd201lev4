/* eslint-disable no-undef */
const shouldlist = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const done = (index) => {
    all[index].completed = true;
  };

  let justnow = new Date().toLocaleDateString("en-CA");
  // let justnow = new Date().toISOString().split("T")[0];

  const late = () => {
    return all.filter((todo) => {
      return todo.dueDate < justnow;
    });
  };

  const duethisday = () => {
    return all.filter((todo) => {
      return todo.dueDate === justnow;
    });
  };

  const duenext = () => {
    return all.filter((todo) => {
      return todo.dueDate > justnow;
    });
  };

  const showlist = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == justnow ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    done,
    late,
    duethisday,
    duenext,
    showlist,
  };
};

module.exports = shouldlist;

