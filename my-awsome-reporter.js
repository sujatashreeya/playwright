class MyReporter {
    onBegin(config, suite){
        console.log("==================================================");
        console.log(`Starting the run with ${suite.allTests().length} tests`);
    }

    onTestBegin(test){
        console.log("***********************************");
        console.log(`Starting test ${test.tile}`);
    }

    onTestEnd(test, result){
        console.log("#################################################");
        console.log(`Starting test ${test.title}: ${result.status}`);
    }

    onEnd(result){
        console.log("==================================================");
        console.log(`Finished the run with ${result.status} tests`);
    }


}

module.exports = MyReporter;