var Application = {
    initApplication : function(){
      $(window).load('pageinit','#page-one',function(){
        Application.initShowEvent();
      }),
      $(document).on('click','#detail-event',function(){
        var id_tiket = $(this).data('id_tiket');
        Application.initShowDetailEvent(id_tiket);
      })
    },
    initShowEvent : function(){
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
            '"target="_self" id="detail-event" data-id_tiket="'+dataObject[i].id_tiket+'"><h2>'+dataObject[i].nama_tiket+
'</h2><p>'+dataObject[i].tanggal_tiket+'</p><p><b>'+dataObject[i].harga_tiket+'</b></p></a></li>';
            $('#list-event').append(appendlist);}
            $('#list-event').listview('refresh');
          },
          complete : function(){
            $.mobile.loading('hide');
          }
        });
    },
  initShowDetailEvent: function (id_Tiket) {
    $.ajax({
      url: 'https://api-ppk.herokuapp.com/tiket',
      type: 'get',
      dataType:"json",
      beforeSend: function () {
        $.mobile.loading('show', {
          text: 'Please waith while retrieving data...',
          textVisible: true
        });
      },
      success: function (dataObject) {
        $('#p-nama_event,#p-alamat,#p-tanggal,#p-harga,#p-stok_tiket').empty();
        for (var i = 0; i < dataObject.length; i++) {
          if (dataObject[i].id_tiket == id_Tiket) {
            $('#p-nama_event').append('<b>Nama Event             : </b>' + dataObject[i].nama_tiket);
            $('#p-alamat').append('<b>Alamat Event            : </b>' + dataObject[i].alamat_tiket);
            $('#p-tanggal').append('<b>Tanggal            : </b>' + dataObject[i].tanggal_tiket);
            $('#p-harga').append('<b>Harga    : </b>' + dataObject[i].harga_tiket);
            $('#p-stok_tiket').append('<b>Stok             : </b>' + dataObject[i].stok_tiket);
          }
        }
      },
      complete: function () {
        $.mobile.loading('hide');
      }
    });
  }
  };