import { Route } from 'react-router-dom';
import Redirect from 'umi/redirect';

export default (args) => {
  const { render, ...rest } = args;
  //rest里可以拿到当前路由路径
  const authorized = true ;
  return <Route
    {...rest}
    render={props =>
      <div>
        {
          authorized ? render(props) : <Redirect to='/404'/>
        }
      </div>
    }
  />;
}
