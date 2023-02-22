import React from "react";

function ModalItem({ p1, p2, p3, p4, p5 }) {
	return (
        // this holds the items for the modal and formats it
		<>
			<p className="text-black text-xs">{p1}</p>
            <br/>
			<p className="text-black text-xs">{p2}</p>
            <br/>
			<p className="text-black text-xs">{p3}</p>
			<br />
			<p className="text-black text-xs">{p4}</p>
            <br/>
			<p className="text-black text-xs">{p5}</p>
		</>
	);
}

export default ModalItem;
