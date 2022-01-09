<%*
const campaign = tp.user.Campaign().load()
const utils = tp.user.Utils();
const name = await tp.system.prompt('Enter Name');
const id = utils.kebabCase(name);

await tp.file.move(`${campaign.name}/1 - Compendium/Lieux/${name}`);
-%>

```leaflet
id:  <% id %>
image: [[Image.jpg]]
lat: 50
long: 50
minZoom: 1
maxZoom: 10
defaultZoom: 5
unit: meters
scale: 1
```