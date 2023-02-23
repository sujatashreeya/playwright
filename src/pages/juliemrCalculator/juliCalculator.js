const { typeObj, fillObj } = require("../../../commonFunction/inputAction");
var {firstField, secondField, goButton, operator }= require("../juliemrCalculator/JuliCalcLocation.js");
var {clickOnElement} = require("../../../commonFunction/clickAction.js");
var {selectOptionObj, pressObj} = require("../../../commonFunction/inputAction.js");

var julCalculator = async (page, vaue1, value2, operation) => {
     
    await fillObj(page, "locator", firstField, vaue1);
    await page.waitForTimeout(4000);
    await fillObj(page, "locator", secondField, value2);
    await page.waitForTimeout(4000);

    await selectOptionObj(page,"locator", operator, operation );
    await page.waitForTimeout(4000);
    // await page.selectOption("[ng-model='operator']",{value:"MULTIPLICATION"});
    // await page.waitForTimeout(5000);
    
    // await clickOnElement(page,"locator", goButton )
    // await page.waitForTimeout(4000);

    await pressObj(page, "locator", goButton, "Enter");
    await page.waitForTimeout(8000);


}

module.exports ={julCalculator};