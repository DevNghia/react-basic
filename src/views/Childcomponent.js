import React from 'react';
class Childcomponent extends React.Component{
    
    state={
        showJobs: false
    }
    handleChangeShow = (status) =>{
        this.setState({
            showJobs : !this.state.showJobs
        })
    }
    handleDeletedata = (job) =>{
        console.log('check: ', job)
        this.props.deleteAJob(job)
    }
    render() {
        console.log("check props", this.props)
        let{arrJob}=this.props;
        let{showJobs} = this.state
        return(
          
            <> 
             {showJobs ===false ?
                <div><button onClick={()=>this.handleChangeShow()}>Show</button></div>
            :
                <>
               <div className='job-lists'>
                   {
                       arrJob.map((item, index) => {
                           if(+item.salary>=500){

                           return (
                               <div key={item.id}>
                                   {item.title} - {item.salary} $ <></><span onClick={()=>this.handleDeletedata(item)}>x</span>
                               </div>
                           )
                           }
                           
                       })
                   } 
               </div>
               <div><button onClick={()=>this.handleChangeShow()}>Hide</button></div>
               </>
                }
            </>
            
        )
    }
}
export default Childcomponent;