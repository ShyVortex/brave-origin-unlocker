const homeDir = Deno.env.get("HOME");
const versions = ["Brave-Origin", "Brave-Origin-Beta", "Brave-Origin-Nightly"];
let foundAny = false;

for (const version of versions) {
  const localStatePath = `${homeDir}/Library/Application Support/BraveSoftware/${version}/Local State`;

  try {
    const localState = JSON.parse(await Deno.readTextFile(localStatePath));
    
    localState.brave = localState.brave || {};
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
    console.log(version.replace(/-/g, " ") + " unlocked successfully!");
    foundAny = true;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      continue;
    }
    throw error;
  }
}

if (!foundAny) {
  console.log("Brave Origin not found.");
}