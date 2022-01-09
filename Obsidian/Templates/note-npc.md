<%*
const campaign = tp.user.Campaign().load()
const name = await tp.system.prompt('Enter Name');
const race = await campaign.chooseRace(tp);
const gender = await campaign.chooseGender(tp);

await tp.file.move(`${campaign.name}/1 - Compendium/NPCs/${name}`);
-%>

---

cssclass: 'npc'
tags: NPC

---
<span class="npc-tags">#<% race %> #<% gender %></span>

# <% name %>
<span class="nav">[Objectifs](#Objectifs) [Détails](#Détails) [Relations](#Relations) [Statistiques](#Statistiques) [Secrets](#Secrets)</span>

```ad-desc

<span class="image">![[<% name %>.jpg]][[<% name %>.jpg|Voir]]</span>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.
```

## Objectifs

## Détails

## Relations
	
## Statistiques

## Secrets