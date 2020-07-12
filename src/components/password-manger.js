import React from 'react';
import '../styles/styles.scss';

export default class Manager extends React.Component
{
  constructor(props)
	{
		super(props);
    this.handleButton=this.handleButton.bind(this);
		this.state=
		{		
      email: null,
      password: null
		};
	}
  
  handleButton()
  {
    console.log(this.state.email);
    console.log(this.state.password);
  };
	
	render()
	{
		return(
     
      <div className="window">
      <div className="window-header"> Password Manager</div>
        <div className="window-content">
            <form action="#" onSubmit={this.handleButton}>
              <input type='email' placeholder='Email' onChange={(e) => { this.setState({email: e.target.value})}} className='email'></input><br></br>
              <input type='password' placeholder='Password' onChange={(e) => { this.setState({password: e.target.value } )}} className='password'></input><br></br>
              <input type='submit' className='login' value='Login'></input>
            </form>
        </div>
      </div>
    
		);
  }
  


}




