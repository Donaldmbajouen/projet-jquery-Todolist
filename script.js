
var task = $("<div class='tache animated bounceInUp' style='background-color:rgba(248, 5, 5, 0.822);'></div>").text($(".text").val());
var delt = $('<button id="del"><i class="fas fa-trash-alt "></i></button>');
var chek = $('<button class="check"><i class="fas fa-check "></i></button>');
 var btn = $('<div class="btn"> <button class="check"><i class="fas fa-check "></i></button><button id="del"><i class="fas fa-trash-alt "></i></button></div>');


$(function(){

    $(".add").click(function(){
        if($(".text").val() != ""){
            var task = $("<div class='tache animated bounceInUp' style='background-color:rgba(248, 5, 5, 0.822);'></div>").text($(".text").val());
            var btn = $('<div class="btn"> <button class="check"><i class="fas fa-check "></i></button><button id="del"><i class="fas fa-trash-alt "></i></button></div>');

            task.append(btn);

            $(".notcomp").append(task);

            $(".text").val("");
        }
    });
    
});
 $(function(){

      $('#del').click(function(){
         var p= $(this).parent();
         var pa= p.parent();
         pa.fadeOut(function(){
             pa.remove();
             alert("ij,ktg");
         });
                
     });
    
 });
