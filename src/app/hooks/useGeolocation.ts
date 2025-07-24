import { useEffect, useState } from "react";

type Location = {
	latitude: number;
	longitude: number;
};

export function useGeolocation() {
	const [location, setLocation] = useState<Location | null>(null);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		if (!navigator.geolocation) {
			setError("Geolocation is not supported by this browser~");
			setLoading(false);
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(position) => {
				setLocation({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				});
				setError("");
				setLoading(false);
			},
			(err) => {
				setError(`Error getting location: ${err.message}`);
				console.error(err);
				setLoading(false);
			},
			{ enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
		);
	}, []);

	return { location, error, isLoading };
}
