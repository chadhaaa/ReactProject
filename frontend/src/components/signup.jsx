import React , {Component} from 'react' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


class Signup extends Component{

    constructor(){

        super();
        this.state = {
            firstname: '',
            lastname: '',
            birthDate: '',
            password: '',
            email: '',

        };
    }
    changeFirstname(event){
        this.setState({
            firstname:event.target.value
        });

    }
    changeLastname(event){
        this.setState({
            lastname:event.target.value
        });

    }
    changeBirthDate(event){
        this.setState({
            birthDate:event.target.value
        });

    }
    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      };




    render(){

        return(
            <Link to={'/signup'}  element={ <Signup />}> 
                <div>
                <div className='container'>
                    <div className='form-div'>
                        <form>
                            <input type='text'
                            placeholder='Firstname'
                            onChange={this.handleChange}
                            value={this.state.firstname}
                            className='form-control form-group'
                            id='firstname'
                            />
                            <input type='text'
                            placeholder='lastname'
                            onChange={this.handleChange}
                            value={this.state.lastname}
                            className='form-control form-group'
                            id='lastname'
                            />
                            <input type='date'
                            onChange={this.handleChange}
                            value={this.state.birthDate}
                            className='form-control form-group'
                            id='birthDate'
                            
                            />
                            <input type='email'
                            placeholder='email'
                            onChange={this.handleChange}
                            value={this.state.email}
                            className='form-control form-group'
                            id='email'
                            
                            />
                            
                            <input type='password'
                            placeholder='password'
                            onChange={this.handleChange}
                            value={this.state.password}
                            className='form-control form-group'
                            id='password'
                            
                            />
                            
                            
                            <input type='submit' className='btn btn-danger btn-block' value='submit'/>
                        </form>
                    </div>    
                </div>
            </div>
            </Link>
            
        );

    }
}

export default Signup;