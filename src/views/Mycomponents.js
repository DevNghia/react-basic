import React from 'react';
import Childcomponent from './Childcomponent';
import Addcomponent from './Addcomponent';
class Mycomponents extends React.Component{
    
    state ={
      
        arrJob: [
            {id: 'abcJob1', title:'Developers', salary:'500'},
            {id: 'abcJob2', title:'Tester', salary:'400'},
            {id: 'abcJob3', title:'Webdesign', salary:'1000'}
        ]
    }
   
    addNewJob = (job) =>{
        console.log("check job for parent: ", job)
        this.setState({
            arrJob:[...this.state.arrJob,job]
        })
    }
    deleteAJob =(job)=>{
         let currenJobs = this.state.arrJob;
         currenJobs= currenJobs.filter(item => item.id !== job.id);
         this.setState({
             arrJob: currenJobs
         })
    }
    render() {
        console.log("call render", this.state)
        return(
            <>
            <Addcomponent 
                addNewJob={this.addNewJob}
            />
              
            <Childcomponent arrJob={this.state.arrJob}
                deleteAJob={this.deleteAJob}
            />

            </>
            
        )
    }
}
export default Mycomponents;