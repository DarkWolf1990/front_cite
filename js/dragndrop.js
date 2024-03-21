(()=>{

    document.addEventListener ( 'DOMContentLoaded',
        dragNdrop )

    function dragNdrop( ) {
        const bin = document.getElementById( 'bin' )
        const folders = document. getElementsByClassName(
            'folder' )
        const list = document.getElementById( 'list' )
        let i = 0
        for( i = 0 ; i < folders.length; i++ ) {
            folders[ i ].ondragstart = function( event ) {
                event.dataTransfer.setData( 'Text', this.id ) }
        }
        bin.ondragover = function( event ) { return false }
        bin.ondrop = function( event ) {
            const did = event.dataTransfer.getData( 'Text' )
            const tag = document.getElementById( did )
            if ( did === 'bin' ) { return false }
            else { list.innerHTML += '<li>' + did }
            tag.parentNode.removeChild( tag )
    }

    }



})()