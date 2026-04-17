const localAppData = Deno.env.get("LOCALAPPDATA");

const localStatePath =
  `${localAppData}\\BraveSoftware\\Brave-Origin-Nightly\\User Data\\Local State`;

const localState = JSON.parse(await Deno.readTextFile(localStatePath));

localState.brave.origin = { purchase_validated: true };

localState.skus = {
  state: {
    "67": JSON.stringify({
      credentials: {
        items: { "6": "7" },
      },
    }),
  },
};

await Deno.writeTextFile(localStatePath, JSON.stringify(localState));

console.log("Brave Origin Nightly unlocked successfully!");
