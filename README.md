# react-redux-book
 Learn React Concepts with Redux
 
 
 
 
 
 
 # Pics

Uncontrolled Change Method: 
Outside of Render:
    onInputChange(event) {
        console.log(event.target.value);
        //Can do the following line inline to the same thing
    }

    onInputClick() {
        console.log("Input was clicked");
    }

### `onChange`
onChange={this.onInputChange}

onChange= {(event)=>console.log(event.target.value)} // This can be done inline as well

When this in invoked, the coresponding function will run. 

### `onCLick`
onClick={this.onInputClick}

Controlled Change Method:



  
