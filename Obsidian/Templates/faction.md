<%*
const Utils = tp.user.Utils()

const name = await tp.system.prompt('Enter Name');
const tag = Utils.camelCase(name);

await tp.file.move(`1 - Compendium/Factions/${name}`);
-%>

---

cssclass: 'npc'
tags: Faction <% tag %>

---

# <% name %>
<span class="nav">[Objectifs](#Objectifs) [Détails](#Détails) [NPCs](#NPCs) [Relations](#Relations) [Secrets](#Secrets)</span>

```ad-desc

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.
```

## Objectifs

## Détails

## NPCs
```query
tag: NPC tag: <% tag %>
```

## Relations

## Secrets
