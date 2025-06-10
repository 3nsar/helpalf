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

    it('should return the correct coordinates [0, 0] when spaceship is found', function () {
		const map =
			"X"
		expect(helpAlf.findSpaceship(map)).toEqual([0, 0]);
	});

        it('should return the correct coordinates [1, 0] when spaceship is found', function () {
		const map =
			".X"
		expect(helpAlf.findSpaceship(map)).toEqual([1, 0]);
	});

	it('should return the correct coordinates [7, 2] when spaceship is found', function () {
		const map =
			"..........\n" +
			"..........\n" +
			"..........\n" +
			".......X..\n" +
			"..........\n" +
			"..........";
		expect(helpAlf.findSpaceship(map)).toEqual([7, 2]);
	});



});
