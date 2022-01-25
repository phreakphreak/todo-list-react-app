import { Link } from 'wouter';

const Navigation = () => (
  <>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="#">
      <a>Todo</a>
    </Link>

    {/* <Route path="/users/:name">
      {(params) => <div>Hello, {params.name}!</div>}
    </Route>
    <Route path="/inbox" component={InboxPage} /> */}
  </>
);

export default Navigation;
