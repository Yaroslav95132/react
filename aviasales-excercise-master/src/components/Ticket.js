import React from 'react'


const formatStops = stops => {
	switch (stops) {
		case 0:
			return `0 пересадок`
		case 1:
			return `1 пересадка`
		case 2:
		case 3:
		case 4:
			return `${stops} пересадки`
		default:
			return `${stops} пересадок`

	}
}
export default ({
	origin,
	origin_name,
	destination,
	destination_name,
	departure_date,
	departure_time,
	arrival_date,
	arrival_time,
	carrier,
	stops,
	price
}) =>
	<div className="ticket">
		<div className="ticket__buy-col">
			<img className="ticket__header" src="https://api.fnkr.net/testimg/160x83/00CED1/FFF/?text=Turkish+Airlines" />
				<button type="button" className="btn ticket__buy-btn"> 
					<strong className="ticket__buy-btn-text">
						{price} р 
					</strong>
					
			
				</button>
		</div>
		<div className="ticket__content">
			<div className="ticket__content-wrapper">
				<div className="fly-segment__origin">
					<div className="fly-segment__time"> {departure_time}  </div>
					<div className="fly-segment__city">{origin} {origin_name}</div>
					<div className="fly-segment__date"> {departure_date} </div>
				</div>
				<div className="fly-segment__path">
					<div className="stpps">
						{formatStops(stops)}
					</div>
					
					<img className="fly-segment__plane " src="http://i.imgur.com/6OpFK2q.png" alt="" />


				</div>
				<div className="fly-segment__destination">
					<div className="fly-segment__time"> {arrival_time}  </div>
					<div className="fly-segment__city">{destination_name} {destination}</div>
					<div className="fly-segment__date"> {arrival_date} </div>
				</div>
				.
			</div>

		</div>





	</div>