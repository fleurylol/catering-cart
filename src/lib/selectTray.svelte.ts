export function setTray() {
	let tray = $state('');

	return {
		get tray() {
			return tray;
		},
		select: (trayName: string) => (tray = trayName)
	};
}
