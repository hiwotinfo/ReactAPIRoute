import React from 'react'

// <!-- Second section starts here -->
function SecondHilight() {
  return (
    <React.Profiler>
	<section class="second-hightlight-wrapper">
		<div class="container">

			<div class="new-alert">
				New
			</div>

			<div class="title-wraper bold black">
				MacBook Air 
			</div> 

			<div class="description-wrapper black">
				Twice the speed. Twice the storage.
			</div>

			<div class="price-wrapper grey">
				From $999.
			</div>

			<div class="links-wrapper">
				<ul>
					<li><a href="">Learn more</a></li>
					<li><a href="">Buy</a></li>
				</ul> 
			</div>
		</div>
	</section>
    </React.Profiler>
    	// <!-- Second section starts here -->
  )
}

export default SecondHilight;