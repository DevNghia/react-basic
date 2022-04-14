import React from 'react';


class Addcomponent extends React.Component {
    state ={
        title:'',
        salary: '',
    }
    handleChangetitlejob = (event) =>{
        this.setState({
            title: event.target.value
        })
    }
    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        if(!this.state.title||!this.state.salary){
            alert('missing required params')
        }
        console.log("checkdata:", this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title:this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title:'',
            salary:''
        })
}
    render(){
        return(
            <form >
            <label htmlFor="fname">Title job:</label><br/>
            <input 
              onChange={(event)=>this.handleChangetitlejob(event)}
            type="text" value={this.state.title}/><br/>
            <label htmlFor="lname">Salary:</label><br/>
            <input 
             onChange={(event)=>this.handleChangesalary(event)}
            type="text"  value={this.state.salary}/><br/><br/>
            <input
             onClick={(event)=> this.handleSubmit(event)}
            type="Submit" value="Submit"/>
          </form> 
        )
    }
}

export default Addcomponent;