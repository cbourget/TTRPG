<%*
const campaign = await tp.user.Campaign().load()
const name = await tp.system.prompt('Enter Name');

await tp.file.move(`${campaign.name}/1 - Compendium/Concepts/${name}`);
-%>

---

cssclass: 'concept'

---

# <% name %>
<span class="nav">[Détails](#Détails) [Secrets](#Secrets)</span>

Lorem Ipsum

## Détails
## Secrets
