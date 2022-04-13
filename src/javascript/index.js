//declarando o mapa de ouvintes
const listeners = new Map();

//declarando a lista de eventos
const events = ["buy", "sell", "rent"];

//inicializando os ouvintes com seus eventos
function main() {
  events.forEach((event) => {
    listeners.set(event, []);
  });
}

//realizando a inscrição do ouvinte no evento
function subscribe(eventType, listener) {
  const users = listeners.get(eventType);
  users.push(listener);
}

//realizando a remoção do ouviente no evento
function unsubscribe(eventType, listener) {
  var event = listeners.get(eventType);
  listeners.set(
    eventType,
    event.filter((user) => user.name !== listener.name)
  );
}

//notificando os ouvintes do evento
function notify(eventType, message) {
  const event = listeners.get(eventType);
  event.forEach((listener) => {
    listener.callback(`${listener.name}: ${message}`);
  });
}

main();

//criando os clientes
const client = {
  name: "Paulo",
  callback: function (message) {
    console.log(message);
  },
};

const otherClient = {
  name: "Rique",
  callback: function (message) {
    console.log(message);
  },
};
// realizando a inscrição dos ouvintes no evento de venda
subscribe("sell", client);
subscribe("sell", otherClient);

//notificando os ouvintes sobre o evento de venda
notify("sell", "S22 vendido!");


//removendo a inscrição do ouvinte do evento de venda
unsubscribe("sell", client);

//notificando os ouvintes sobre o evento de venda
notify("sell", "Iphone vendido!");

//removendo a inscrição do ouvinte do evento de venda
unsubscribe("sell", otherClient);

//logando os eventos sem ouvintes
console.log(listeners)
