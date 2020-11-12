var scatterPost = (function(){
    var greet = function() {
        console.log("hello from scatter.js");
    }
    return {
        greet: greet
    }
})();

scatterPost.greet();