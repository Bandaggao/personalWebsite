const NavItem = props =>{
  const pageURI = window.location.pathname+window.location.search
  const liClassname = (props.path===pageULI) ? "nav-item active" : "nav-item";
  return(
    <li classname={liClassname}>
      <a href={props.path} className="nav-link">{props.name}
      {(props.path === pageURI) ? (<span classname="sr-only">(current)</span>): ''}
      </a>
    </li>
  );
}