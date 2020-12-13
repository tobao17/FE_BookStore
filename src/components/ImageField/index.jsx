import React, { useEffect, useState } from "react";
import "./index.css";
function ImageField(props) {
	let Url =
		"https://increasify.com.au/wp-content/uploads/2016/08/default-image.png";

	if (props.Imageurl) {
		Url = props.Imageurl;
		//console.log(Url);
	}
	const [image, setimage] = useState(Url);
	useEffect(() => {
		setimage(Url);
	}, [Url]);

	const onchangeimage = (e) => {
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]); //tim hieu readerAsDataUrl
		reader.onload = () => {
			if (reader.readyState === 2) {
				setimage(reader.result);
			}
		};
		props.onchange(e.target.files[0]);
	};

	return (
		<div>
			<div className="container">
				<div className="label">
					<label className="image-upload" htmlFor="input">
						Chọn Hình
					</label>
				</div>
				<div className="img-holder">
					<img src={image} alt="" id="img" className="img" />
				</div>
				<input
					type="file"
					accept="image/*"
					name="image-upload"
					id="input"
					onChange={onchangeimage}
				/>
			</div>
		</div>
	);
}

export default ImageField;
