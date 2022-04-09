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





    render(){

        return(
            <Link to={'/signup'}  element={ <Signup />}> 
                <div>
                <div className='container'>
                    <div className='form-div'>
                        <form>
                            <input type='text'
                            placeholder='Firstname'
                            onChange={this.changeFirstname}
                            value={this.state.firstname}
                            className='form-control form-group'
                            />
                            <input type='text'
                            placeholder='lastname'
                            onChange={this.changeLastname}
                            value={this.state.lastname}
                            className='form-control form-group'
                            />
                            <input type='date'
                            onChange={this.changeBirthDate}
                            value={this.state.birthDate}
                            className='form-control form-group'
                            
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