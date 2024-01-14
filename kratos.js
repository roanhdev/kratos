const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Cliente conectado!");
});

client.on("message_create", (msg) => {
  const chatType =
    msg.type === "sticker"
      ? "sticker"
      : msg.type === "image"
      ? "imagen"
      : msg.type === "video"
      ? "video"
      : "chat";
  console.log(chatType);
});

client.initialize();
