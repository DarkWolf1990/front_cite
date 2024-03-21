
(()=>{
    document.getElementById( 'host' ).innerText += document.domain
    function sendMsg( ) {
        const cage = document.getElementById( 'cage' )
            .contentWindow
        cage.postMessage( 'Message Received from: ' +
            document.domain, 'http://example.com' )
    }
})()

