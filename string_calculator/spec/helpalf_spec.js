describe('Help ALF', function () {
	let helpAlf;

	beforeEach(function () {
		helpAlf = new HelpAlf();
	});


	it('should return message if spaceship is not found', function () {
		const map =
			"";
		expect(helpAlf.findSpaceship(map)).toBe("Spaceship lost forever.");
	});

    it('should return message if spaceship is not found', function () {
		const map =
			".";
		expect(helpAlf.findSpaceship(map)).toBe("Spaceship lost forever.");
	});

    it('should return message if spaceship is not found', function () {
		const map =
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........";
		expect(helpAlf.findSpaceship(map)).toBe("Spaceship lost forever.");
	});


});
