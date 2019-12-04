var Application = {
    initApplication: function () {
        $(window).load('pageinit', '#page-one', function () {
            Application.initShowEvent();
        }),
            $(document).on('click', '#detail-mhs', function () {
                var id_promo = $(this).data('nimmhs');
                Application.initShowDetailEvent(id_promo);
            })
    },
    initShowEvent: function () {
        $.ajax({
            url: 'http://localhost:3000/promo',
            type: 'get',
            beforeSend: function () {
                $.mobile.loading('show', {
                    text: 'Please wait while retrieving data...',
                    textVisible: true
                });
            },
            success: function (dataObject) {
                var appendList = '';
                for (var i = 0; i < dataObject.length; i++) {
                    var appendlist = '<li><a href=#page-two ?id=' + dataObject[i].id_promo +
                        '"target="_self" id="detail-mhs" data-nimmhs="' + dataObject[i].id_promo + '"><h2>' + dataObject[i].nama_promo +
                        '</h2><p>' + dataObject[i].kode_promo + '</p><p><b>' + dataObject[i].diskon + '</b></p></a></li>';
                    $('#list-event').append(appendlist);
                }
                $('#list-event').listview('refresh');
            },
            complete: function () {
                $.mobile.loading('hide');
            }
        });
    },
    initShowDetailEvent: function (id_promo) {
        $.ajax({
            url: 'http://localhost:3000/promo',
            type: 'get',
            dataType: "json",
            beforeSend: function () {
                $.mobile.loading('show', {
                    text: 'Please waith while retrieving data...',
                    textVisible: true
                });
            },
            success: function (dataObject) {
                $('#p-nama_promo,#p-kode_promo,#p-diskon').empty();
                for (var i = 0; i < dataObject.length; i++) {
                    if (dataObject[i].id_promo == id_promo) {
                        $('#p-nama_promo').append('<b>Nama Promo             : </b>' + dataObject[i].nama_promo);
                        $('#p-kode_promo').append('<b>Kode Promo            : </b>' + dataObject[i].kode_promo);
                        $('#p-diskon').append('<b>Diskon            : </b>' + dataObject[i].diskon);
                    }
                }
            },
            complete: function () {
                $.mobile.loading('hide');
            }
        });
    }
};