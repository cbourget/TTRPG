<%*
const Race = tp.user.Race()
const Gender = tp.user.Gender()

const name = await tp.system.prompt('Enter Name');
const race = await Race.choose(tp);
const gender = await Gender.choose(tp);

await tp.file.move(`1 - Compendium/NPCs/${name}`);
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