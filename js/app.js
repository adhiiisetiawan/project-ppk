var Application = {
    initApplication : function(){
      $(window).load('pageinit','#page-one',function(){
        Application.initShowMhs();
      })
    },
    initShowMhs : function(){
      $.ajax({
        url: 'https://api.myjson.com/bins/easys',
        type: 'get',
        beforeSend : function() {
          $.mobile.loading('show',{
            text: 'Please wait while retrieving data...',
            textVisible : true
          });
        },
        success : function(dataObject) {
          var appendList='';
          for(var i=0; i < dataObject.length; i++){
            var appendlist = '<li><a href=#page-two ?id='+dataObject[i].NIM+
            '"target="_self" id="detail-mhs" data-nimmhs="'+dataObject[i].NIM+'"><h2>'+dataObject[i].Nama+
'</h2><p>'+dataObject[i].NIM+'</p><p><b>'+dataObject[i].Fakultas+'</b></p></a></li>';
            $('#list-mhs').append(appendlist);}
            $('#list-mhs').listview('refresh');
          },
          complete : function(){
            $.mobile.loading('hide');
          }
        });
    }
  };