import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="footer_content d-flex flex-md-row flex-column align-items-center align-items-start justify-content-start">
						<div class="copyright">
                            All rights reserved @GoTrip Team
                        </div>
						<div class="footer_logo">
							<div class="logo">
									<div>gotrip.lk@gmail.com</div>
							</div>
						</div>
						{/* <div class="button footer_button ml-md-auto"><a href="#">book now</a></div> */}
					</div>
				</div>
			</div>
		</div>
	</footer>
    );
  }
}

export default Footer;
