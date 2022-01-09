<%*
const Utils = tp.user.Utils();
const name = await tp.system.prompt('Enter Name');
const id = Utils.kebabCase(name);

await tp.file.move(`1 - Compendium/Lieux/${name}`);
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