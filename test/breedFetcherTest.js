const { assert } = require("chai");
const { fetchBreedDescription } = require("../breedFetcher");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      assert.equal(err, null);
      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
  it("returns Breed not found for a non-valid breed, via callback", (done) => {
    fetchBreedDescription("ABc", (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "Breed not found";
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
});
