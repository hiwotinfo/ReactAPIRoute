import React from 'react'
import logo from "../../images/icons/logo-sm.png"
import search from '../../images/icons/search-icon-sm.png'
import cart from '../../images/icons/cart-sm.png'



function Header() {
  return (
    // <React.Fragment>
        <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a className="navbar-brand mx-auto" href="#"><img src={logo} /></a>

			    <div className="navbar-collapse collapse">
			        <ul className="navbar-nav nav-justified w-100 nav-fill">
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iphone</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">ipad</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">watch</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">tv</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>
						<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search} /></a></li>
						<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart} /></a></li>
			        </ul>
			    </div>
			</nav>
		</div>
	</div>
    // </React.Fragment>
  );
  
}

export default Header


// https://www.googleapis.com/youtube/v3/channels?key=AIzaSyBgPzNRddLx9R21HD8trpu2OsT3dbs10KU&forUsername=Apple&part=id

//  this is api key // AIzaSyBgPzNRddLx9R21HD8trpu2OsT3dbs10KU

// this is Apple Id// UCE_M8A5yxnLfW0KghEeajjw


// https://www.googleapis.com/youtube/v3/search?key=AIzaSyBgPzNRddLx9R21HD8trpu2OsT3dbs10KU&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=10




