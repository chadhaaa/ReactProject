import React , {Component} from 'react' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
class FirstLogin extends Component {
    constructor(){

        super();
    }

    render() { 
        return(
            <Link to={'/firstlogin'}  element={ <FirstLogin />}> 
            <h1>hello</h1>;
            </Link>
        ) 
    }
}
 
export default FirstLogin;