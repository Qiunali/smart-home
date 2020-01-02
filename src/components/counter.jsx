import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.value,
        imageUrl: 'https://picsum.photos/500',
        tags:['tag1','tag2','tag3']
    };

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no Tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>tag</li>)}</ul>;
     }

     handleIncrement = product => {
         this.setState({ value: this.state.value + 1});
        console.log(product);  
     };

     handleDecrement = product => {
         if (this.state.value > 0)
            this.setState({ value: this.state.value - 1});
    };

    render() { 
        console.log(this.props);
        return (
            <div>
                {this.props.children}
                {/* <img src={this.state.imageUrl} alt=""/> */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.handleIncrement({id: 1})} 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button 
                    onClick={() => this.handleDecrement({id: 1})} 
                    className="btn btn-secondary btn-sm"
                >
                    Decrement
                </button>
                {/* <ul>
        { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
                </ul>
                {this.state.tags.length === 0 &&"Please create a new tag!"}
                {this.renderTags()} */}

            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.state;
        const x = <h1>Zero</h1>;
        return value === 0 ? 'Zero': value;
    }


}
 


export default Counter;