//Make the following function calls work
 var giveItName = function(nam, cb){
 	cb[];
 };

  giveItName('name', function(name){
    alert('Your name is ' + name);
  });

  var nums = [2,4,5,6];
  //returns true if all items in the array are evens.
  areEvens(nums, function(item){
    return item % 2 === 0; 
  });

