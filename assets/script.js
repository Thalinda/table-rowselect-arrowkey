    let current_row = null;

    $(document).keydown(function (e) {
        var rowCount = $('table tbody tr').length;

        if (current_row === null && rowCount > 0) {
            current_row = 1;
            $("table tr").eq(1).addClass('table_row_active')
        } else {
            console.log(e.keyCode);
            switch (e.keyCode) {
                case 40:
                    if (rowCount > current_row) {
                        current_row++;
                        $(".table_row_active").removeClass('table_row_active');
                        $("table tr").eq(current_row).addClass('table_row_active')
                    }
                    break;

                case 38:
                    if (current_row > 1) {
                        current_row--;
                        $(".table_row_active").removeClass('table_row_active');
                        $("table tr").eq(current_row).addClass('table_row_active')
                    }
                    break;

                case 46:
                    if (current_row != null || current_row != 0) {
                        let index = current_row - 1;

                        document.getElementById("testing").deleteRow(index);
                        current_row--
                        if (current_row > 0) {
                            $("table tr").eq(current_row).addClass('table_row_active')
                        }
                        console.log(current_row)
                    }
                    break;





            }
        }
    })