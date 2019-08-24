const appRoot = document.getElementById('app')


class VisibleToggle extends React.Component{
    constructor(props){
        super(props)
        this.Toggler = this.Toggler.bind(this)
        this.state ={
            toggle:true
        }
    }

    Toggler() {
       
        this.setState((prevState)=>{
            return{
                toggle:!prevState.toggle
            }
        })
        
    }
   render(){
       return(
           <div>
                <h1>Visibility Toggle</h1>
               {this.state.toggle && <p>This is random text</p>}
               <button onClick={this.Toggler}>{this.state.toggle ? 'hide details' : 'show details'}</button>
           </div>
       )
   }
}




ReactDOM.render(<VisibleToggle />, appRoot)





