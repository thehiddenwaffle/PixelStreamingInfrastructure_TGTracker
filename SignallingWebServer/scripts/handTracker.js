// TODO
const socket = new WebSocket('ws://192.168.1.159:8001')

// socket.onopen = function(e) {
    // alert("[open] Connection established");
    // const requestData = function(){
    //     socket.send(JSON.stringify({request: "data"}))
    // }
    // setInterval(requestData, .1)
// }


socket.onmessage = function(e) {
    let trackerData;
    try{
        trackerData = JSON.parse(e.data)
    }catch(e){
        console.log("invalid JSON, ignoring");
    }
    if(trackerData !== null){
        console.log(trackerData)
        emitARData(trackerData)
    }
}

socket.onerror = function(error) {
    alert(`[error] ${error.message}`);
};


