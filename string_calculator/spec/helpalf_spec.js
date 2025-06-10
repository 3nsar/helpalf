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
});
