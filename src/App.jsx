import { Component } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import { load, save } from "./storage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    this.setState({ tasks: load() });
  }

  onTaskCreate = (name, description) => {
    const { tasks } = this.state;
    const id = Date.now();
    const time = new Date().toISOString().substring(0, 19).replace("T", " / ");
    tasks.unshift({
      id,
      name,
      description,
      time,
      isChecked: false,
    });
    this.setState({ tasks }, () => {
      save(tasks);
    });
  };

  onTaskCheck = (id) => {
    const { tasks } = this.state;
    for (const task of tasks) {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
        break;
      }
    }
    this.setState({ tasks }, () => {
      save(tasks);
    });
  };

  onTaskDelete = (id) => {
    const { tasks } = this.state;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        tasks.splice(i, 1);
        break;
      }
    }
    this.setState({ tasks }, () => {
      save(tasks);
    });
  };

  onTaskEdit = (id, name, description) => {
    const { tasks } = this.state;
    for (const task of tasks) {
      if (task.id === id) {
        task.name = name;
        task.description = description;
        break;
      }
    }
    this.setState({ tasks }, () => {
      save(tasks);
    });
  };

  render() {
    return (
      <div className="container">
        <AddTask onAddTask={this.onTaskCreate} />
        <div className="item__list">
          {this.state.tasks.map((task) => {
            return (
              <Task
                name={task.name}
                description={task.description}
                time={task.time}
                id={task.id}
                isChecked={task.isChecked}
                key={task.id}
                onCheck={this.onTaskCheck}
                onDelete={this.onTaskDelete}
                onEdit={this.onTaskEdit}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
