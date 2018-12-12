import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value
  //     tags: ["tag1", "tag2", "tag3"]
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   handleIncrement = product => {
  //     console.log(product);
  //     this.setState({ value: this.state.value + 1 });
  //   };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    if (prevProps.counter.value !== this.props.counter.value) {
      //AJAX call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Component - Unmount");
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {/* <React.Fragment></React.Fragment> if you don't want a div container */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm bm-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag"} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
