"use client";

import React from "react";
import { useGeolocation } from "@/app/hooks/useGeolocation"; // update path as needed

function Home() {
	const { location, error, isLoading } = useGeolocation();

	return (
		<div>
			<div id="forecast-weekly">From Sunday to Saturday</div>
			<div id="container">
				<div id="forecast-hourly">From 00:01am to 11:59pm</div>
			</div>

			<div>
				<h1>Your Current Location</h1>
				{isLoading ? (
					<p>Fetching location...</p>
				) : error ? (
					<p>{error}</p>
				) : location ? (
					<div>
						<p>Latitude: {location.latitude}</p>
						<p>Longitude: {location.longitude}</p>
					</div>
				) : null}
			</div>
		</div>
	);
}

export default Home;
