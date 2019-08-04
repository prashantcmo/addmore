$( document ).ready(function() {
    addmore();
});

var addmore = function() {
    var wrapper = $(".addmore-wrapper");
    var x = 0;
    $(wrapper).on("click", '.addmore-btn', function (e) {  //on add input button click
        e.preventDefault();
        x++;
        $(wrapper).append('<div class="col-lg-12 row"><div class="col-lg-8 field"><br/><input type="text" class="form-control" placeholder="Add Text Here" name="text['+x+']" /></div><div class="col-lg-4"><br/><a href="#" class="btn btn-success addmore-btn">Add More</a>&nbsp;&nbsp;<a href="#" class="btn btn-danger remove-btn">Remove</a></div></div>')
    });
    $(wrapper).on("click", '.remove-btn', function (e) { 
        e.preventDefault(); 
        $(this).closest('.col-lg-12').remove();
       
    })
};
