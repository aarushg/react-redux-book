# react-redux-book
 Learn React Concepts with Redux
 
 
 
 
 
 
 # Pics

Uncontrolled Change Method:

    onInputChange(event) {
        console.log(event.target.value);
        //Can do the following line inline to the same thing
        //onChange= {(event)=>console.log(event.target.value)}
    }

    onInputClick() {
        console.log("Input was clicked");
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search </label>
                        <input type="text"
                        //When a user clicks (onClick) or types (onChange) the event is called 
                            ### `onClick={this.onInputClick}`
                            ### `onChange={this.onInputChange} />`
                    </div>
                </form>
            </div>
        )
    }
};

Controlled Change Method:



  
