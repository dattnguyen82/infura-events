var Owned = artifacts.require("./Owned.sol");

contract('Owned', function(accounts) {
    //Test Creation
    it("Test Owned creation", async () => {
    	let instance = await Owned.new();

    	let results = await instance.getOwner();
    	assert.equal(results[0], accounts[0], "Owner should match " + accounts[0]);
	    assert.equal(results[1].toNumber(), 0, "Current price should be 0");
    });

	//Test Update
	it("Test Owned update", async () => {
		let instance = await Owned.new();

		let price = web3.toWei(1, "ether");

		await instance.sendTransaction({from: accounts[1], value: price});

		let results = await instance.getOwner();

		assert.equal(results[0], accounts[1], "Owner should match " + accounts[1]);
		assert.equal(results[1].toNumber(), web3.toWei(1, "ether"), "Current price should be 1");
	});

	//Test Events
	it("Test Owned update", async () => {
		let instance = await Owned.new();

		let updateEvent = instance.OwnerUpdated();

		let price = web3.toWei(1, "ether");

		await instance.sendTransaction({from: accounts[1], value: price});

		let eventData = await updateEvent.get();
		assert.equal(eventData[0].type, 'mined', "Event Log type should be 'mined'");
		assert.equal(eventData[0].event, 'OwnerUpdated', "Event Log event should be 'OwnerUpdated'");
		assert.equal(eventData[0].args.newOwner, accounts[1], "Event Log newOwner should match " + accounts[1]);
		assert.equal(eventData[0].args.newPrice.toNumber(), price, "Event Log newPrice should match " + price);
		assert.equal(eventData[0].args.timestamp.toNumber() > 0, true, "Event Log timestamp should be greater than 0 ");
	});
});
