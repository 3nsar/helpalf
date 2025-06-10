function HelpAlf() {}

HelpAlf.prototype.findSpaceship = function (map) {
	

  //überprüfen, ob überhaupt eine karte vorhanden ist
  if (!map) {
    return "Spaceship lost forever.";
  }

	const lines = map.split('\n').reverse(); // // Karte in einzelne Zeilen aufteilen und umderehen.

    //durchsuche jede Zeile und wenn X gefunden wird, Koordinate angeben
	for (let y = 0; y < lines.length; y++) {
		const x = lines[y].indexOf('X');
		if (x !== -1) {
			return [x, y];
		}
	}
	return "Spaceship lost forever.";
};
