import React from "react";
import PropTypes from "prop-types";

Bloghome.propTypes = {};

function Bloghome(props) {
	return (
		<div className="blog-posts bg-light pt-4 pb-4">
			<div className="container">
				<h2 className="title">From Our Blog</h2>
				{/* End .title-lg text-center */}
				<div
					className="owl-carousel owl-simple"
					data-toggle="owl"
					data-owl-options='{
                        "nav": false, 
                        "dots": true,
                        "items": 3,
                        "margin": 20,
                        "loop": false,
                        "responsive": {
                            "0": {
                                "items":1
                            },
                            "600": {
                                "items":2
                            },
                            "992": {
                                "items":3
                            },
                            "1200": {
                                "items":4
                            }
                        }
                    }'
				>
					<article className="entry">
						<figure className="entry-media">
							<a href="single.html">
								<img
									src="assets/images/demos/demo-20/blog/post-1.jpg"
									alt="image desc"
								/>
							</a>
						</figure>
						{/* End .entry-media */}
						<div className="entry-body">
							<div className="entry-meta">
								<a href="#">Nov 22, 2018</a>, 0 Comments
							</div>
							{/* End .entry-meta */}
							<h3 className="entry-title">
								<a href="single.html">
									Aenean dignissim pellentesque felis.
								</a>
							</h3>
							{/* End .entry-title */}
							<div className="entry-content">
								<p>
									Morbi in sem quis dui placerat ornare. Pellentesque
									odio nisi, euismod in, pharetra a, ultricies in,
									diam. Sed arcu.
								</p>
								<a href="single.html" className="read-more">
									Continue read ...
								</a>
							</div>
							{/* End .entry-content */}
						</div>
						{/* End .entry-body */}
					</article>
					{/* End .entry */}
					<article className="entry">
						<figure className="entry-media">
							<a href="single.html">
								<img
									src="assets/images/demos/demo-20/blog/post-2.jpg"
									alt="image desc"
								/>
							</a>
						</figure>
						{/* End .entry-media */}
						<div className="entry-body">
							<div className="entry-meta">
								<a href="#">Dec 12, 2018</a>, 0 Comments
							</div>
							{/* End .entry-meta */}
							<h3 className="entry-title">
								<a href="single.html">
									Donec nec justo eget felis facilisis fermentum.
								</a>
							</h3>
							{/* End .entry-title */}
							<div className="entry-content">
								<p>
									Donec odio. Quisque volutpat mattis eros. Nullam
									malesuada erat ut Suspendisse urna nibh, viverra non,
									semper suscipit.
								</p>
								<a href="single.html" className="read-more">
									Continue read ...
								</a>
							</div>
							{/* End .entry-content */}
						</div>
						{/* End .entry-body */}
					</article>
					{/* End .entry */}
					<article className="entry">
						<figure className="entry-media">
							<a href="single.html">
								<img
									src="assets/images/demos/demo-20/blog/post-3.jpg"
									alt="image desc"
								/>
							</a>
						</figure>
						{/* End .entry-media */}
						<div className="entry-body">
							<div className="entry-meta">
								<a href="#">Dec 19, 2018</a>, 2 Comments
							</div>
							{/* End .entry-meta */}
							<h3 className="entry-title">
								<a href="single.html">Aliquam porttitor mauris sit.</a>
							</h3>
							{/* End .entry-title */}
							<div className="entry-content">
								<p>
									Suspendisse urna nibh, viverra semper suscipit.
									posuere a, pede. Morbi in sem quis dui placerat
									ornare.
								</p>
								<a href="single.html" className="read-more">
									Continue read ...
								</a>
							</div>
							{/* End .entry-content */}
						</div>
						{/* End .entry-body */}
					</article>
					{/* End .entry */}
					<article className="entry">
						<figure className="entry-media">
							<a href="single.html">
								<img
									src="assets/images/demos/demo-20/blog/post-4.jpg"
									alt="image desc"
								/>
							</a>
						</figure>
						{/* End .entry-media */}
						<div className="entry-body">
							<div className="entry-meta">
								<a href="#">Dec 19, 2018</a>, 2 Comments
							</div>
							{/* End .entry-meta */}
							<h3 className="entry-title">
								<a href="single.html">
									Integer vitae libero ac risus egestas placerat.
								</a>
							</h3>
							{/* End .entry-title */}
							<div className="entry-content">
								<p>
									Lorem ipsum dolor sit amet, consecte tuer adipiscing
									elit. Donec odio. Quisque volutpat mattis eros.
								</p>
								<a href="single.html" className="read-more">
									Continue read ...
								</a>
							</div>
							{/* End .entry-content */}
						</div>
						{/* End .entry-body */}
					</article>
					{/* End .entry */}
				</div>
				{/* End .owl-carousel */}
			</div>
			{/* End .container */}
		</div>
	);
}

export default Bloghome;
