const { ethers } = require("hardhat")
const {expect, assert } = require("chai")

describe("SimpleStorage", function () {
    beforeEach(async function () {
        const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    })

    it("Should start with a favorite number of 0", async function(){
      const currentValue = await simpleStorage.retrieve()
      const expecteValue = "0"
      // assert
      // expect
      assert.equal(currentValue.toString(),expecteValue) 
    })

    it("Should update when we call store", async function(){
      const expectedValue = "7"
      const transactionResponse = await simpleStorage.store(expectedValue)
      await transactionResponse.wait(1)

      const currentValue = await simpleStorage.retrieve()
      assert.equal(currentValue.toString(), expectedValue)
    })
})
