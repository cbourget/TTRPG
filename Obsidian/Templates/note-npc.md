<%*
const campaign = await tp.user.Campaign().load();
const name = await tp.system.prompt('Enter Name');
const race = await campaign.chooseRace(tp);
const gender = await campaign.chooseGender(tp);

await tp.file.move(`${campaign.name}/1 - Compendium/NPCs/${name}`);
-%>

---

cssclass: 'npc'
tags: NPC

---
<span class="nav">[Objectifs](#Objectifs) [Détails](#Détails)  [Relations](#Relations) [Secrets](#Secrets) [Statistiques](#Statistiques)</span>

# <% name %>

```ad-desc

<span class="image">![[<% name %>.jpg]][[<% name %>.jpg|Voir]]</span>

<span class="npc-tags">#<% race %> #<% gender %></span>

<span>Lorem Ipsum</span>

<strong>Physique: </strong>

<strong>Caractère: </strong>
```

## Objectifs

## Détails

## Relations

## Secrets

## Statistiques