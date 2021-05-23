let binanceSocket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade')
  
let tradeDiv = document.getElementById('trades')
binanceSocket.onmessage = function(event) {
  let messageObject = JSON.parse(event.data)

  tradeDiv.append(messageObject.p + ' ')
}