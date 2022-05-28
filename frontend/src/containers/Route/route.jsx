import { Route as BaseRoute, } from 'react-router-dom';



const Route = ({...rest} ) => {


    const {location,CoachRoute} = rest;
    const {pathname} = location;
    // redirect user to login page if not logged in and trying to access a restricted page
   /* const isRestricted = ['/login', '/signup'].includes(pathname);
    const isLoggedIn = localStorage.getItem('user');
    if (isRestricted && !isLoggedIn) {
        return <Navigate to='/login' />
    }
    // redirect user to home page if logged in and trying to access login page
    if (isLoggedIn && pathname === '/login') {
        return <Navigate to='/' />
    }
    // protect coach routes from non-coaches
    if (!CoachRoute ) {
        return <Navigate to='/' />
    }    */
    return (
        (<div>
        <BaseRoute {...rest} />
        </div>)
    )
}
export default Route;