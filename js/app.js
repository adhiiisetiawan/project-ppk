var Application = {
    initApplication : function(){
      $(window).load('pageinit','#page-one',function(){
        Application.initShowMhs();
      })
    },
    initShowMhs : function(){
      $.ajax({
        url: 'https://api-ppk.herokuapp.com/tiket',
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
            var appendlist = '<li><a href=#page-two ?id='+dataObject[i].id_tiket+
            '"target="_self" id="detail-mhs" data-nimmhs="'+dataObject[i].id_tiket+'"><h2>'+dataObject[i].nama_tiket+
'</h2><p>'+dataObject[i].harga_tiket+'</p><p><b>'+dataObject[i].harga_tiket+'</b></p></a></li>';
            $('#list-mhs').append(appendlist);}
            $('#list-mhs').listview('refresh');
          },
          complete : function(){
            $.mobile.loading('hide');
          }
        });
    }
  };