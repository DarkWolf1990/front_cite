(()=>{
    function store( ) {
        let data = document.getElementById( 'data' ).value
        if(data === '' ) {return false} else {
            localStorage.setItem( 'ls_data' , data )
            document.getElementById( 'data' ).value = ''
            document.getElementById( 'legend' ).innerText= localStorage.getItem('ls_date') + '-ls Stored'
        }
    }
    function recall( ) {
        if (localStorage.getItem( 'ls_data' ) === null ) {
            document.getElementById( 'legend' ).innerText =
                'Enter Data' ; return false } else {
            document.getElementById( 'data' ).value = ''
            document.getElementById( 'legend' ).innerText =
                'Stored Data: ' + localStorage.getItem( 'ls_data' )
        }
    }
    function remove( ) {
        if ( localStorage.getItem( 'ls_data' ) === null ) {
            document.getElementById( 'legend' ).innerText
                = 'Enter Data'; return false} else {
            document.getElementById( 'legend' ).innerText =
                localStorage.getItem( 'ls_data' ) + ' Is Removed'
            localStorage.remove( 'ls_data' )
            document.getElementById('data').value = ''
        }
    }
})()