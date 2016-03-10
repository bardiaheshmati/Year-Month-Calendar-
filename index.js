
function calSelect(year){
  var minYear = year;
  var currentYear = new Date().getFullYear();
  var year = "";
  year += '<option value="0" selected>Select Year</option>'
  year
  for (var i= minYear; i<= currentYear ; i++ ){
    year += '<option value="'+i+'">'+i+'</option>';
  }
   $('#year').html(year);  
}

calSelect(2014);

$('#year').change(function(){
  $('#month').prop('disabled',false);
  var year = $(this).val();
  var month ="";
  month += '<option value="0" selected>Select Month</option>'
  if(year == new Date().getFullYear()){
    for(var i=1;i<= new Date().getMonth() + 1;i++){
      month += '<option value="'+i+'">'+moment(i,'MM').format('MMMM')+'</option>';
    }
  }else if(year == '0'){
    $('#month').prop('disabled',true);
  }
  else{
    for(var i=1;i<= 12 ;i++){
      month += '<option value="'+i+'">'+ moment(i,'MM').format('MMMM') +'</option>';
    }
  }
  $('#month').html(month);
  
});