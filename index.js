import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "MjQxNTk5NDYzODAwNTY5ODU2.GDl-TQ.fovLW94RxVlhfxdUBl4QutqOW5jqBQ5zvy2hdE"
);

gateway.on("message", (m) => {
  if (m.channel_id === "977324557084016750") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "https://discord.com/api/webhooks/1025105826530213989/OOM2hWrrxDrOBDVfjutNzkLxq93dlZAdESVw-vgK-r8HEA9vPC4KHqW5DOfCe5WEUzmx",
      content
    );
  }
});